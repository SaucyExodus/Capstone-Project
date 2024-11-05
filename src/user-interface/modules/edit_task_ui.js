export function editTaskModal(taskData) {
  const taskId = taskData.id.toString();
  const taskNameText = taskData.task_name;
  const dueDateInteger = taskData.due_date;
  const assignedUsersArray = JSON.parse(taskData.assigned_users);
  const taskNotesText = JSON.parse(taskData.task_notes);
  const taskStatus = taskData.task_status;

  let taskStatusText;
  switch (taskData.task_status) {
    case "TODO":
      taskStatusText = "To Do";
      break;
    case "IN_PROGRESS":
      taskStatusText = "In Progress";
      break;
    case "DONE":
      taskStatusText = "Complete";
      break;
    default:
      taskStatusText = "Unknown Status";
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
        block_id: "task_name_input",
        element: {
          type: "plain_text_input",
          action_id: "task_name_action",
          initial_value: taskNameText,
          max_length: 75,
        },
        label: {
          type: "plain_text",
          text: "Task Name",
          emoji: true,
        },
      },
      {
        type: "input",
        block_id: "assign_user_input",
        element: {
          type: "multi_users_select",
          action_id: "assign_user_action",
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
        block_id: "due_datetime_input",
        element: {
          type: "datetimepicker",
          action_id: "due_datetime_action",
          ...(dueDateInteger && { initial_date_time: dueDateInteger }),
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
        block_id: "notes_input",
        element: {
          type: "rich_text_input",
          action_id: "notes_action",
          max_length: 500,
          ...(taskNotesText && { initial_value: taskNotesText }),
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
        block_id: "status_input",
        element: {
          type: "static_select",
          initial_option: {
            value: taskStatus,
            text: {
              type: "plain_text",
              text: taskStatusText,
              emoji: true,
            },
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "To Do",
                emoji: true,
              },
              value: "TODO",
            },
            {
              text: {
                type: "plain_text",
                text: "In Progress",
                emoji: true,
              },
              value: "IN_PROGRESS",
            },
            {
              text: {
                type: "plain_text",
                text: "Complete",
                emoji: true,
              },
              value: "DONE",
            },
          ],
          action_id: "status_action",
        },
        label: {
          type: "plain_text",
          text: "Status",
          emoji: true,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "DELETE TASK",
              emoji: true
            },
            style: "danger",
            value: taskId, // Pass the task ID as the value
            action_id: "delete_task" // Correct action ID
          }
        ]
      }
    ],
  };
  return modal;
}