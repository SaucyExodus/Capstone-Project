import { getSavedTasks } from '../../functions/getSavedTasks.js'; // Function to fetch saved tasks

export async function appHomeOpenedUI(userId) {
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
        },
      ],
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
  const inProgressTasks = [];
  const toDoTasks = [];
  const completedTasks = [];

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

    console.log(`Task ID: ${task.task_id}, Status: ${task.task_status}`); // Log task ID and status

    switch (task.task_status) { // Use task.task_status instead of task.status
      case 'IN_PROGRESS':
        inProgressTasks.push(taskBlock);
        break;
      case 'TODO':
        toDoTasks.push(taskBlock);
        break;
      case 'COMPLETED':
        completedTasks.push(taskBlock);
        break;
      default:
        console.log(`Unknown status: ${task.task_status}`);
        break;
    }
  });

  // Insert tasks into their respective sections
  blocks.splice(inProgressIndex + 1, 0, ...inProgressTasks);
  blocks.splice(toDoIndex + 2 + inProgressTasks.length, 0, ...toDoTasks);
  blocks.splice(completedIndex + 3 + inProgressTasks.length + toDoTasks.length, 0, ...completedTasks);

  return {
    type: 'home',
    blocks: blocks
  };
}