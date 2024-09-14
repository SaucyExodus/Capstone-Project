export function registerListeners(slackEvents, web) {
    slackEvents.on('app_home_opened', async (event) => {
        try {
            // Ensure you use the correct channel ID or name
            await web.chat.postMessage({
                channel: '#test-bot', // Use a valid channel ID or name
                text: "You clicked the home tab!"
            });
            console.log("YAYA");
        } catch (error) {
            console.log(error);
        }
    });
}
