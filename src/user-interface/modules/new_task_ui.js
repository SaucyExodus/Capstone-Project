export function createNewTaskModal() {
  const modal = {
    type: "modal",
    callback_id: "create_task_modal",
    title: {
      type: "plain_text",
      text: "Create New Task",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Submit",
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
        label: {
          type: "plain_text",
          text: "Task Name",
          emoji: true,
        },
        element: {
          type: "plain_text_input",
          action_id: "task_name_action",
          placeholder: {
            type: "plain_text",
            text: "Enter your task here",
            emoji: true,
          },
          max_length: 75, // Set character limit for Task Name
        },
      },
      {
        type: "input",
        block_id: "assign_user_input",
        label: {
          type: "plain_text",
          text: "Add Contributors",
          emoji: true,
        },
        element: {
          type: "multi_users_select",
          action_id: "assign_user_action",
          placeholder: {
            type: "plain_text",
            text: "Select users",
            emoji: true,
          },
        },
      },
      {
        type: "input",
        block_id: "due_datetime_input",
        label: {
          type: "plain_text",
          text: "Due Date",
          emoji: true,
        },
        element: {
          type: "datetimepicker",
          action_id: "due_datetime_action",
        },
        optional: true,
      },
      {
        type: "input",
        block_id: "notes_input",
        label: {
          type: "plain_text",
          text: "Notes",
          emoji: true,
        },
        element: {
          type: "rich_text_input",
          action_id: "notes_action",
          max_length: 500, // Set character limit for Notes
        },
        optional: true,
      },
    ],
  };
  return modal;
}
