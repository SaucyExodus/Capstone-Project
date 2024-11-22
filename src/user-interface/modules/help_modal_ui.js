export function helpModal() {
    const modal = {
      type: "modal",
      title: {
        type: "plain_text",
        text: "Help",
        emoji: true,
      },
      close: {
        type: "plain_text",
        text: "Close",
        emoji: true,
      },
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "Creating a new task",
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "To create a new task, locate the 'Create New Task' button located at the top of the home page. Then, fill out the information in the pop-up.",
            emoji: true,
          },
        },
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "Moving a task to a different progress state",
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "To change the progress state of a task, navigate to the home page and click the 'View Task' button on the right hand side of the desired task.",
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Within the pop-up window, select the 'Edit Task' button on the bottom right hand side.",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Click the dropdown in the status section and choose a new status for the task.",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Click 'Done' and these changes will be reflected immediately.",
          },
        },
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "Editing a task",
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "To edit a task, navigate to the home page and click the 'View Task' button on the right hand side of the desired task.",
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Within the pop-up window, select the 'Edit Task' button on the bottom right hand side.",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "You will then be able to update any details of the task (as marked by the arrows).",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Once you're finished, click 'Done' to save your changes, or 'Cancel' to discard any modifications.",
          },
        },
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "Deleting a task",
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "To delete a task, start by navigating to the home page and clicking the 'Expand' button located on the right side of the task you wish to modify. In the pop-up window, select the Edit Task' button. You should now see a ‘DELETE TASK’ button which will delete the given task.",
            emoji: true,
          },
        },
      ],
    };
  
    return modal;
  }