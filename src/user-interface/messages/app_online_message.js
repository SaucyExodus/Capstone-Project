export function appOnlineMessageUI() {
    return [
        {
            type: 'section',
            block_id: 'section-identifier',
            text: {
                type: 'mrkdwn',
                text: '*Welcome to the Slack app!* Click the button to visit the Home tab.'
            },
            accessory: {
                type: 'button',
                text: {
                    type: 'plain_text',
                    text: 'Go to App'
                },
                url: 'https://slack.com/app_redirect?channel=D07KGPEBBFC' // Deep link to your Slack channel
            }
        }
    ];
}