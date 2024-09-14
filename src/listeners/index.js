export function appHomeOpenedEvent(slackEvents) {
    slackEvents.on('app_home_opened', async (event) => {
        try {
            console.log("YAYA")
        } 
    });
}