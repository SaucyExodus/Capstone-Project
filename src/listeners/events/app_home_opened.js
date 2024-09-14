import { appHomeOpenedUI } from '../../user-interface/app-home/home_tab.js';

export function appHomeOpenedEvent(slackEvents, web) {
    slackEvents.on('app_home_opened', async (event) => {
        try {
            // Print Users name in console log when user opens app home
            const userName = await web.users.info({ user: event.user });
            console.log('App Home opened by user:', userName.user.real_name);
            appHomeOpenedUI(event, web);
        } catch (error) {
            // Catch errors
            console.log(error);
        }
    });
}