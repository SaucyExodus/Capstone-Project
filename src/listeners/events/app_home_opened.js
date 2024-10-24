import { appHomeOpenedUI } from "../../user-interface/app-home/home_tab.js";

export async function appHomeOpenedEvent(slackActivity, web) {
  const event = slackActivity.event;

  try {
    // Print user's name in console log when user opens app home
    const userInfo = await web.users.info({ user: event.user });
    console.log("App Home opened by user:", userInfo.user.real_name);

    // Fetch the updated home tab view
    const homeView = await appHomeOpenedUI();

    // Publish the updated home tab view for the user
    await web.views.publish({
      user_id: event.user,
      view: homeView
    });
  } catch (error) {
    console.error('Error publishing home tab view:', error); // Catch errors
  }
}