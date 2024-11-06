export function viewAllTasks() {
    const modal = {
            "type": "modal",
            "close": {
                "type": "plain_text",
                "text": "Close",
                "emoji": true
            },
            "title": {
                "type": "plain_text",
                "text": "App menu",
                "emoji": true
            },
            "blocks": [
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": "{Task status} Tasks",
                        "emoji": true
                    }
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
                                "text": "Previous",
                                "emoji": true
                            },
                            "value": "click_me_123",
                            "action_id": "actionId-0"
                        },
                        {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Next",
                                "emoji": true
                            },
                            "value": "click_me_123",
                            "action_id": "actionId-1"
                        }
                    ]
                }
            ]
        
    }
    
    return modal;

}