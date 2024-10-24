export function appHomeOpenedUI() {
  const view = 
  {
      "type": "home",
      "blocks": [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Task Tracker"
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
              "style": "primary",
              "value": "create_task"
            },
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Open Kanban Board",
                "emoji": true
              },
              "value": "create_project"
            },
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Help",
                "emoji": true
              },
              "value": "help"
            }
          ]
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Your Tasks*"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "divider"
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
              "value": "new_task"
            }
          ]
        }
      ]
    }
  return view; 
}
