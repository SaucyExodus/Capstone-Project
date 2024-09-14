export function registerListeners(slackEvents, web) {
    slackEvents.on('app_home_opened', async (event) => {
        try {
            // Print Users name in console log when user opens app home
            const userName = await web.users.info({ user: event.user });
            console.log('App Home opened by user: ', userName);
        } catch (error) {
            // Catch errors
            console.log(error);
        }
    });
}
