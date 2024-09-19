import { appHomeOpenedUI } from "../../user-interface/app-home/home_tab.js";

export async function appHomeOpenedEvent(slackActivity, web) {
  const event = slackActivity.event;

  try {
    // Print users name in console log when user opens app home
    const userInfo = await web.users.info({ user: event.user });
    console.log("App Home opened by user:", userInfo.user.real_name);

    // Print home tab view for user
    await web.views.publish({
      user_id: event.user,
      view: appHomeOpenedUI()
    });
  } catch (error) {
    console.error(error); // Catch errors
  }
}
