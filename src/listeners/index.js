export function registerListeners(slackEvents) {
    slackEvents.on('app_home_opened', async (event) => {
        try {
            console.log("YAYA");
        } catch (error) {
            console.log(error);
        }
    });
}