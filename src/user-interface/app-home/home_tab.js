export function appHomeOpenedUI() {
  const view = 
  {
    "type": "home",
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
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Create New Task",
              "emoji": true
            },
            "value": "click_me_123",
            "action_id": "create_new_task"
          }
        ]
      },
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "To Do",
          "emoji": true
        }
      },
      {
        "type": "divider"
      },
      {
        "type": "section",
        "block_id": "todo1",
        "text": {
          "type": "mrkdwn",
          "text": "*Make call*"
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Expand"
          },
          "action_id": "expand_task1",
          "value": "task_1"
        }
      },
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "In Progress",
          "emoji": true
        }
      },
      {
        "type": "divider"
      },
      {
        "type": "section",
        "block_id": "progress1",
        "text": {
          "type": "mrkdwn",
          "text": "*Walk the dog*"
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Expand"
          },
          "action_id": "expand_task1",
          "value": "task_1"
        }
      },
      {
        "type": "section",
        "block_id": "progress2",
        "text": {
          "type": "mrkdwn",
          "text": "*Meeting with boss*"
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Expand"
          },
          "action_id": "expand_task2",
          "value": "task_1"
        }
      },
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "Done",
          "emoji": true
        }
      },
      {
        "type": "divider"
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Write english paper"
        },
        "accessory": {
          "type": "overflow",
          "options": [
            {
              "text": {
                "type": "plain_text",
                "text": "Delete",
                "emoji": true
              },
              "value": "delete_done1"
            },
            {
              "text": {
                "type": "plain_text",
                "text": "Not done yet",
                "emoji": true
              },
              "value": "return_done1"
            }
          ],
          "action_id": "overflow-action"
        }
      }
    ]
  }
    
}
