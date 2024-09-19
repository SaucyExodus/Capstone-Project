export function createNewTaskModal() {
  const modal = {
    type: "modal",
    callback_id: "create_task_modal",
    title: {
      type: "plain_text",
      text: "Create new task",
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
      { type: "divider" },
      {
        type: "input",
        block_id: "task_name_input",
        label: {
          type: "plain_text",
          text: "New task",
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
        },
      },
      {
        type: "input",
        block_id: "assign_user_input",
        label: {
          type: "plain_text",
          text: "Assign user",
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
        block_id: "due_date_input",
        label: {
          type: "plain_text",
          text: "Due date",
          emoji: true,
        },
        element: {
          type: "datepicker",
          action_id: "due_date_action",
          placeholder: {
            type: "plain_text",
            text: "Select a date",
            emoji: true,
          },
        },
        optional: true,
      },
      {
        type: "input",
        block_id: "time_input",
        label: {
          type: "plain_text",
          text: "Time",
          emoji: true,
        },
        element: {
          type: "timepicker",
          action_id: "time_action",
          placeholder: {
            type: "plain_text",
            text: "Select time",
            emoji: true,
          },
        },
        optional: true,
      },
    ],
  };
  return modal;
}
