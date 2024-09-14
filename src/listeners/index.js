export function registerListeners(slackEvents, web) {
    slackEvents.on('app_home_opened', async (event) => {
        try {
            web.chat.postMessage('#test-bot', "You clicked home tab!")
            console.log("YAYA");
        } catch (error) {
            console.log(error);
        }
    });
}