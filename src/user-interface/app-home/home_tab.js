export function appHomeOpenedUI() {
  const view = {
    type: "home",
    blocks: [
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
          text: "*Your Tasks*",
        },
      },
      {
        type: "divider",
      },
    ],
  };
  return view;
}
