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
                    "text": "To create a new task, locate the 'Create New Task' button located at the top of the home page",
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
                    "text": "To change the progress state of a task, navigate to the home page and click the 'Expand' button on the right hand side of the desired task.  Within the pop-up window, change the status of your task by the status dropdown section.  These changes will be reflected immediately.",
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
    }
    
    return modal;

}