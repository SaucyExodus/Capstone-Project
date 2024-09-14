function appHomeOpenedEvent(slackEvents) {
    slackEvents.on('app_home_opened', async (event) => {
        try {
            console.log("App home was opened!")
        } catch (error) {
            onsole.error('Error:', error);
        }
    });
}

module.exports = { appHomeOpenedEvent };