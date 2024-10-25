export function createViewTaskModal(taskData) {
    const taskNameText = `${taskData.task_name}`;
    const dueDateText = taskData.due_date ? `Due date: *${taskData.due_date}*` : "No Due Date";
    const assignedUsersText = JSON.parse(taskData.assigned_users).map(user => `<@${user}>`).join('\n');
    const taskNotesText = taskData.task_notes.elements

    console.log(taskNotesText);

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
                    "text": taskNameText,
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
                    "text": assignedUsersText
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
                "type": "rich_text",
                "elements": [
                    {
                        "type": "rich_text_preformatted",
                        "elements": [
                            {
                                "type": "text",
                                "text": "Task notes."
                            }
                        ]
                    }
                ]
            },            {
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
  