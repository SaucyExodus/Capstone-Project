import { getSavedTasks } from '../../functions/getSavedTasks.js'; // Function to fetch saved tasks

export async function appHomeOpenedUI(userId, justCompletedTaskId = null) {
  const tasks = await getSavedTasks(userId); // Fetch saved tasks assigned to the user

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "Task Tracker",
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Create New Task",
            emoji: true,
          },
          style: "primary",
          value: "create_task",
          action_id: "new_task",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Open Kanban Board",
            emoji: true,
          },
          value: "open_kanban",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Help",
            emoji: true,
          },
          value: "help",
          action_id: "help_modal",
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*In Progress Tasks*"
      }
    },
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*To-Do Tasks*"
      }
    },
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Completed Tasks*"
      }
    },
    {
      type: "divider"
    }
  ];

  // Find the index positions for each task category
  const inProgressIndex = blocks.findIndex(block => block.text && block.text.text === "*In Progress Tasks*");
  const toDoIndex = blocks.findIndex(block => block.text && block.text.text === "*To-Do Tasks*");
  const completedIndex = blocks.findIndex(block => block.text && block.text.text === "*Completed Tasks*");

  // Arrays to hold tasks by status
  let inProgressTasks = [];
  let toDoTasks = [];
  let completedTasks = [];

  // Categorize tasks by status
  tasks.forEach(task => {
    const taskBlock = {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Task Created by <@${task.created_by}>*\n*Task Name:*\n${task.task_name}`,
      },
      accessory: {
        type: "button",
        action_id: "view_task_button",
        value: task.task_id.toString(), // Use task_id instead of taskId
        text: {
          type: "plain_text",
          text: "View Task",
        },
      },
    };

    //console.log(`Task ID: ${task.task_id}, Status: ${task.task_status}`); // Log task ID and status

    switch (task.task_status) { // Use task.task_status instead of task.status
      case 'IN_PROGRESS':
        inProgressTasks.push({ task, taskBlock });
        break;
      case 'TODO':
        toDoTasks.push({ task, taskBlock });
        break;
      case 'DONE':
        if (task.task_id === justCompletedTaskId) {
          completedTasks.unshift({ type: "divider" }); // Add divider after the task
          completedTasks.unshift(taskBlock); // Add to the front of the array
        } else {
          completedTasks.unshift({ type: "divider" });
          completedTasks.unshift(taskBlock);
        }
        break;
      default:
        console.log(`Unknown status: ${task.task_status}`);
        break;
    }
  });

  // Sort In Progress tasks by due date and then by creation date
  inProgressTasks.sort((a, b) => {
    const dateA = a.task.due_date ? new Date(a.task.due_date) : new Date(8640000000000000); // Max date if no due date
    const dateB = b.task.due_date ? new Date(b.task.due_date) : new Date(8640000000000000); // Max date if no due date
    if (dateA - dateB !== 0) return dateA - dateB;
    const createdA = a.task.created_at ? new Date(a.task.created_at) : new Date(0); // Default to epoch if no date
    const createdB = b.task.created_at ? new Date(b.task.created_at) : new Date(0); // Default to epoch if no date
    return createdA - createdB;
  });

  // Sort TODO tasks by due date and then by creation date
  toDoTasks.sort((a, b) => {
    const dateA = a.task.due_date ? new Date(a.task.due_date) : new Date(8640000000000000); // Max date if no due date
    const dateB = b.task.due_date ? new Date(b.task.due_date) : new Date(8640000000000000); // Max date if no due date
    if (dateA - dateB !== 0) return dateA - dateB;
    const createdA = a.task.created_at ? new Date(a.task.created_at) : new Date(0); // Default to epoch if no date
    const createdB = b.task.created_at ? new Date(b.task.created_at) : new Date(0); // Default to epoch if no date
    return createdA - createdB;
  });

  // Get the oldest 5 In Progress tasks
  inProgressTasks = inProgressTasks.slice(0, 5).flatMap(({ taskBlock }) => [taskBlock, { type: "divider" }]);

  // Get the oldest 5 TODO tasks
  toDoTasks = toDoTasks.slice(0, 5).flatMap(({ taskBlock }) => [taskBlock, { type: "divider" }]);

  completedTasks.reverse();

  // Get the 5 most recent completed tasks
  completedTasks = completedTasks.slice(0, 10); // 5 tasks + 5 dividers

  // Insert tasks into their respective sections
  blocks.splice(inProgressIndex + 2, 0, ...inProgressTasks);
  blocks.splice(toDoIndex + 2 + inProgressTasks.length, 0, ...toDoTasks);
  blocks.splice(completedIndex + 3 + inProgressTasks.length + toDoTasks.length, 0, ...completedTasks);

  return {
    type: 'home',
    blocks: blocks
  };
}