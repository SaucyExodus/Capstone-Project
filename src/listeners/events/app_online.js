import { appOnlineMessageUI } from '../../user-interface/messages/app_online_message'

let setAppPresence = false;

export async function appOnlineEvent(slackEvents, web) {
    if(!setAppPresence) {
        try {
            await web.chat.postMessage({
                channel: '#test-bot',
                text: 'Bot is now online!',
                blocks: appOnlineMessageUI().blocks
            });
            console.log('App is online!');
            setAppPresence = true;
        } catch (error) {
            console.error('Error: ', error);
        }        
    }
}