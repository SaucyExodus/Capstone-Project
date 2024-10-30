export function editTaskModal() {
  const modal = {
    type: "modal",
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
      /*
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "plain_text_input-action",
          placeholder: {
            type: "plain_text",
            text: "Current Name",
          },
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
          type: "datetimepicker",
          action_id: "datetimepicker-action",
        },
        label: {
          type: "plain_text",
          text: "Change Due Date (optional)",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "multi_users_select",
          placeholder: {
            type: "plain_text",
            text: "Select users",
            emoji: true,
          },
          action_id: "multi_users_select-action",
        },
        label: {
          type: "plain_text",
          text: "Add Contributors (optional)",
          emoji: true,
        },
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
          text: "Notes (optional)",
          emoji: true,
        },
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
      */
    ],
  };
  return modal;
}
