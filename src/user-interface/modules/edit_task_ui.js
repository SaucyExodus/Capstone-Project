export function editTaskModal(taskData) {
  const taskId = taskData.id.toString();
  const taskNameText = taskData.task_name;
  const taskAuthorText = `Author <@${taskData.created_by}>`;
  const dueDateText = taskData.due_date ? `Due date: *${taskData.due_date}*` : "No Due Date";
  const assignedUsersArray = JSON.parse(taskData.assigned_users);
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
      taskStatusText = "`Done`";
      break;
    default:
      taskStatusText = 'Unknown Status';
  }


  const modal = {
    type: "modal",
    private_metadata: taskId,
    callback_id: "edit_task_modal",
    title: {
      type: "plain_text",
      text: "Edit Task",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Done",
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "plain_text_input-action",
          initial_value: taskNameText,
        },
        label: {
          type: "plain_text",
          text: "Task Name",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "multi_users_select",
          action_id: "multi_users_select-action",
          initial_users: assignedUsersArray,          
        },
        label: {
          type: "plain_text",
          text: "Select Contributor(s)",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "datetimepicker",
          action_id: "datetimepicker-action",
          initial_date_time: taskData.due_date,
        },
        label: {
          type: "plain_text",
          text: "Select Due Date",
          emoji: true,
        },
        optional: true,
      },
      {
        type: "input",
        element: {
          type: "rich_text_input",
          action_id: "rich_text_input-action",
          placeholder: {
            type: "plain_text",
            text: "Current task notes",
          },
        },
        label: {
          type: "plain_text",
          text: "Notes",
          emoji: true,
        },
        optional: true,
      },
      {
        type: "input",
        element: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select an item",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "To-Do",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "In Progress",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "Complete",
                emoji: true,
              },
              value: "value-2",
            },
          ],
          action_id: "static_select-action",
        },
        label: {
          type: "plain_text",
          text: "Status",
          emoji: true,
        },
      },
    ],
  };
  return modal;
}
