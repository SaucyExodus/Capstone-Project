export function createViewTaskModal(taskData) {
  const taskNameText = `${taskData.task_name}`;
  const taskAuthorText = `Author @${taskData.created_by}`;
  const dueDateText = taskData.due_date ? `Due date: *${taskData.due_date}*` : "No Due Date";
  const assignedUsersText = JSON.parse(taskData.assigned_users).map((user) => `<@${user}>`).join("\n");

  // Extract text from task_notes
  const taskNotesObject = JSON.parse(taskData.task_notes);
  let taskNotesText = "";
  if (taskNotesObject.type === "rich_text" && Array.isArray(taskNotesObject.elements)) {
    taskNotesText = taskNotesObject.elements.map(element => {
      if (element.type === "rich_text_section" && Array.isArray(element.elements)) {
        return element.elements.map(subElement => subElement.text).join("");
      }
      return "";
    }).join("\n");
  }

  const modal = {
    type: "modal",
    callback_id: "edit_task_modal",
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
          text: taskAuthorText,
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
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: taskNotesText, 
        },
      },
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