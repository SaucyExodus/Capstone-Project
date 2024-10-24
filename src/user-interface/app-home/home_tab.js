import { getSavedTasks } from '../../functions/getSavedTasks.js'; // Function to fetch saved tasks

export async function appHomeOpenedUI() {
  const tasks = await getSavedTasks(); // Fetch saved tasks
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
  ];

  tasks.forEach(task => {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Task Created by <@${task.userId}>*\n*Task Name:*\n${task.taskName}`,
      },
      accessory: {
        type: "button",
        action_id: "view_task_button",
        value: task.taskId.toString(),
        text: {
          type: "plain_text",
          text: "View Task",
        },
      },
    });

    blocks.push({
      type: "divider"
    });
  });

  return {
    type: 'home',
    blocks: blocks
  };
}