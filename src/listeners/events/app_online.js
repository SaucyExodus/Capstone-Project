let setAppPresence = false;

export async function appOnlineEvent(slackEvents, web) {
    if(!setAppPresence) {
        try {
            await web.users.setPresence({ presence: 'auto' });
            await web.chat.postMessage({
                channel: '#test-bot',
                text: 'Bot is now online!'
            });
            console.log('App is online!');
            setAppPresence = true;
        } catch (error) {
            console.error('Error: ', error);
        }        
    }
}