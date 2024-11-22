export function helpModal() {
    const modal = {
        "type": "modal",
        "title": {
            "type": "plain_text",
            "text": "Help",
            "emoji": true
        },
        "close": {
            "type": "plain_text",
            "text": "Close",
            "emoji": true
        },
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    "text": "Task Manager helps you and your team efficiently manage tasks, timelines, and events!",
                    "emoji": true
                }
            },
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": "Creating a new task",
                    "emoji": true
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    "text": "To create a new task, locate the 'Create New Task' button located at the top of the home page. Then, fill out the information in the pop-up.",
                    "emoji": true
                }
            },
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": "Moving a task to a different progress state",
                    "emoji": true
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    "text": "To change the progress state of a task, navigate to the home page and click the 'View Task' button on the right hand side of the desired task.",
                    "emoji": true
                }
            },
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": "Editing a task",
                    "emoji": true
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    "text": "To edit a task, start by navigating to the home page and clicking the 'Expand' button located on the right side of the task you wish to modify. In the pop-up window, select the 'Edit Task' button. You’ll then be able to update any details of the task. Once you’re finished, click 'Done' to save your changes, or 'Cancel' to discard any modifications.",
                    "emoji": true
                }
            },
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": "Deleting a task",
                    "emoji": true
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    "text": "To delete a task, start by navigating to the home page and clicking the 'Expand' button located on the right side of the task you wish to modify. In the pop-up window, select the Edit Task' button.  You should now see a ‘DELETE TASK’ button which will delete the given task.",
                    "emoji": true
                }
            }
        ]
    };

    return modal;
}

// Function to update the modal with images
export function updateModalWithImages(modal) {
    modal.blocks.splice(3, 0, {
        type: "image",
        image_url: "https://drive.google.com/uc?export=view&id=1MaBYCFyUSIrM7C3zTMjw1sETU-pqoBhe",
        alt_text: "Screenshot of Create New Task button",
    });
    modal.blocks.splice(7, 0, {
        type: "image",
        image_url: "https://drive.google.com/uc?export=view&id=19WXlpQid6jox8h5WkEiwIpEh_lmIIqcq",
        alt_text: "Screenshot of View Task button",
    });
}

// Example of how to call the functions
const modal = helpModal();
updateModalWithImages(modal);
// Render the modal with the updated content
renderModal(modal);