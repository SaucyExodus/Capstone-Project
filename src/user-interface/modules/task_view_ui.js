export function createViewTaskModal(taskData) {
  const taskId = taskData.id.toString();
  const taskNameText = `${taskData.task_name}`;
  const taskAuthorText = `Author <@${taskData.created_by}>`;
  const dueDateText = taskData.due_date ? `Due date: *<!date^${taskData.due_date}^{date} at {time}| Invalid Date >*` : "No Due Date";
  const assignedUsersText = JSON.parse(taskData.assigned_users).map((user) => `<@${user}>`).join("\n");
  const taskNotesText = taskData.task_notes ? JSON.parse(taskData.task_notes) : { type: "section", text: {type: "mrkdwn", text: "No notes", }, };
  
  let taskStatusText;
  switch (taskData.task_status) {
    case 'TODO':
      taskStatusText = "`To Do`";
      break;
    case 'IN_PROGRESS':
      taskStatusText = "`In Progress`";
      break;
    case 'DONE':
      taskStatusText = "`Completed`";
      break;
    default:
      taskStatusText = 'Unknown Status';
  }

  const modal = {
    type: "modal",

    callback_id: "open_edit_task_modal",
    private_metadata: taskId,

    title: {
      type: "plain_text",
      text: "Task Overview",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Edit Task",
      emoji: true
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
          text: taskStatusText,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: taskAuthorText,
        },
      },
    ],
  };
  return modal;
}