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
          type: "image",
          image_url: "https://drive.google.com/uc?export=view&id=1MaBYCFyUSIrM7C3zTMjw1sETU-pqoBhe",
          alt_text: "Screenshot of Create New Task button",
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
          type: "image",
          image_url: "https://drive.google.com/uc?export=view&id=19WXlpQid6jox8h5WkEiwIpEh_lmIIqcq",
          alt_text: "Screenshot of View Task button",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Within the pop-up window, select the 'Edit Task' button on the bottom right hand side.",
          },
        },
        {
          type: "image",
          image_url: "https://drive.google.com/uc?export=view&id=1Qhf0eop2FuF3NqSgSM4N3c24A0QBTYBc",
          alt_text: "Screenshot of Edit Task button",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Click the dropdown in the status section and choose a new status for the task.",
          },
        },
        {
          type: "image",
          image_url: "https://drive.google.com/uc?export=view&id=1Uvau8huTm4DfzEK2qvaBxCtdQ9IFTy__",
          alt_text: "Screenshot of Status dropdown",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Click 'Done' and these changes will be reflected immediately.",
          },
        },
        {
          type: "image",
          image_url: "https://drive.google.com/uc?export=view&id=1OcHicB0h2PNkyA1bbRIVCXe5y3vyrzE3",
          alt_text: "Screenshot of Done button",
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
          type: "image",
          image_url: "https://drive.google.com/uc?export=view&id=19WXlpQid6jox8h5WkEiwIpEh_lmIIqcq",
          alt_text: "Screenshot of View Task button",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Within the pop-up window, select the 'Edit Task' button on the bottom right hand side.",
          },
        },
        {
          type: "image",
          image_url: "https://drive.google.com/uc?export=view&id=1Qhf0eop2FuF3NqSgSM4N3c24A0QBTYBc",
          alt_text: "Screenshot of Edit Task button",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "You will then be able to update any details of the task (as marked by the arrows).",
          },
        },
        {
          type: "image",
          image_url: "https://drive.google.com/uc?export=view&id=1Vgdn5hCbzDxbT7w4pUZduI79LH9ptHC3",
          alt_text: "edit task view",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Once you're finished, click 'Done' to save your changes, or 'Cancel' to discard any modifications.",
          },
        },
        {
          type: "image",
          image_url: "https://drive.google.com/uc?export=view&id=1Ibg8s5F5A8AVEGYRv0LJGPGIS7-E2g6v",
          alt_text: "cancel or done button",
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