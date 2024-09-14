import { appOnlineMessageUI } from '../../user-interface/messages/app_online_message.js';

// Initializing a flag for setting the app up
let setAppPresence = false;

export async function appOnlineEvent(slackEvents, web) {
    if(!setAppPresence) {
        try {
            // Attempt to post a message to the '#test-bot' channel on Slack
            await web.chat.postMessage({
                channel: '#test-bot',
                text: 'Bot is now online!',
                blocks: appOnlineMessageUI(),
            });
            console.log('App is online!');
            setAppPresence = true;
        } catch (error) {
            // Log any errors to the console
            console.error('Error: ', error);
        }        
    }
}
