import { appHomeOpenedUI } from "../../user-interface/app-home/home_tab.js";

export async function appHomeOpenedEvent(slackActivity, web) {
  try {
    // Print Users name in console log when user opens app home
    const userInfo = await web.users.info({ user: slackActivity.event.user });
    console.log("App Home opened by user:", userInfo.user.real_name);
    //appHomeOpenedUI(event, web);
  } catch (error) {
    // Catch errors
    console.log(error);
  }
}
