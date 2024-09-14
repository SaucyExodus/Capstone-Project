let setAppPresence = false;

export function appOnlineEvent(slackEvents, web){
    async () => {
        if(!setAppPresence) {
            try {
                await web.chat.postMessage({
                    channel: '#test-bot',
                    text: 'Bot is now online!'
                });
                setAppPresence = true;
            } catch (error) {
                console.error('Error: ', error);
            }        
        }
    };
}