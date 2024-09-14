export function registerListeners(slackEvents, web) {
    slackEvents.on('app_home_opened', async (event) => {
        try {
            // Print Users name in console log when user opens app home
            const userInfo = await web.users.info({ user: event.user });
            const userName = userInfo.user.real_name || userInfo.user.name;
            console.log(`App Home opened by user: `, userName);
        } catch (error) {
            // Catch errors
            console.log(error);
        }
    });
}
