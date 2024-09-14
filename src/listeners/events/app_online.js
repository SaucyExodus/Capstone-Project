export function appOnlineEvent(slackEvents, web){
    slackEvents.on('ready', async () => {
        await web.chat.postMessage({
            channel: '#test-bot',
            message: 'Bot online'
        });
    });
}