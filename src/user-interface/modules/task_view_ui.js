export function createViewTaskModal(taskData) {
    console.log("Task Data:", taskData);
    const dueDateText = taskData.due_date ? `Due date: *${taskData.dueDate}*` : "No Due Date";

    //const assignedUsersText = taskData.assigned_users.map(user => `<@${user}>`).join('\n');

    const modal = {
        "type": "modal",
        "title": {
            "type": "plain_text",
            "text": "Task Overview",
            "emoji": true
        },
        "submit": {
            "type": "plain_text",
            "text": "Edit Task",
            "emoji": true
        },
        "close": {
            "type": "plain_text",
            "text": "Back",
            "emoji": true
        },
        "blocks": [
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": `${taskData.taskName}`,
                    "emoji": true
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": dueDateText
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*Assigned Users*"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "assignedUsersText"
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*Notes*"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "`{Notes}`"
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*Status*"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "`{Status}`"
                }
            },
            {
                "type": "context",
                "elements": [
                    {
                        "type": "plain_text",
                        "text": "Author: @user",
                    }
                ]
            }
        ]
    };
    return modal;
  }
  