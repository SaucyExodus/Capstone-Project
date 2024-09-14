

export function appHomeOpenedEvent(slackEvents, web) {
    slackEvents.on('app_home_opened', async (event) => {
        try {
            // Print Users name in console log when user opens app home
            const userName = await web.users.info({ user: event.user });
            console.log('App Home opened by user:', userName.user.real_name);
            await web.views.publish({

                user_id: event.user,

                view: {
                    type: 'home',
                    callback_id: 'home_view',

                blocks: [
                    {
                        "type": "header",
                        "text": {
                            "type": "plain_text",
                            "text": "Here's what you can do with Project Tracker:"
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
                                "value": "create_task",
                                "action_id":"create_task"
                            },
                            {
                                "type": "button",
                                "text": {
                                    "type": "plain_text",
                                    "text": "Open Kanban Board",
                                    "emoji": true
                                },
                                "style": "primary",
                                "value": "create_project",
                                "action_id":"open_kanban"
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
                        "type": "context",
                        "elements": [
                            {
                                "type": "image",
                                "image_url": "https://api.slack.com/img/blocks/bkb_template_images/placeholder.png",
                                "alt_text": "placeholder"
                            }
                        ]
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "*Your Configurations*"
                        }
                    },
                    {
                        "type": "divider"
                    },
                    {
                        "type": "divider"
                    }

                ]
            }
            });
        } catch (error) {
            // Catch errors
            console.log(error);
        }
    });
}