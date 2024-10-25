export function createViewTaskModal(taskData) {
  const taskNameText = `${taskData.task_name}`;
  const taskAuthorText = `Author @${JSON.parse(taskData.created_by)}`;
  const dueDateText = taskData.due_date ? `Due date: *${taskData.due_date}*` : "No Due Date";
  const assignedUsersText = JSON.parse(taskData.assigned_users).map((user) => `<@${user}>`).join("\n");
  const taskNotesText = JSON.parse(taskData.task_notes);

  const modal = {
    type: "modal",
    title: {
      type: "plain_text",
      text: "Task Overview",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Edit Task",
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: "Back",
      emoji: true,
    },
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: taskNameText,
          emoji: true,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: taskAuthorText,
          },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: dueDateText,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Assigned Users*",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: assignedUsersText,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Notes*",
        },
      },
        taskNotesText,
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Status*",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "`{Status}`",
        },
      },
    ],
  };
  return modal;
}
