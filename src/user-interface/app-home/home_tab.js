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
  const inProgressIndex = blocks.findIndex(block => block.text && block.text.text === "*In Progress Tasks*") + 1;
  const toDoIndex = blocks.findIndex(block => block.text && block.text.text === "*To-Do Tasks*") + 1;
  const completedIndex = blocks.findIndex(block => block.text && block.text.text === "*Completed Tasks*") + 1;

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
        action_id: "edit_task_button",
        value: task.task_id.toString(), // Use task_id instead of taskId
        text: {
          type: "plain_text",
          text: "View Task",
        },
      },
    };

    switch (task.status) {
      case 'IN_PROGRESS':
        inProgressTasks.push(taskBlock);
        console.log(task.status);
        break;
      case 'TODO':
        toDoTasks.push(taskBlock);
        console.log(task.status);
        break;
      case 'COMPLETED':
        completedTasks.push(taskBlock);
        console.log(task.status);
        break;
      default:
        console.log(task.status);
        break;
    }
  });

  // Insert tasks into their respective sections
  blocks.splice(inProgressIndex, 0, ...inProgressTasks);
  blocks.splice(toDoIndex + inProgressTasks.length, 0, ...toDoTasks);
  blocks.splice(completedIndex + inProgressTasks.length + toDoTasks.length, 0, ...completedTasks);

  return {
    type: 'home',
    blocks: blocks
  };
}