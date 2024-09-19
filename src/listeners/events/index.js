import { appHomeOpenedEvent } from "./app_home_opened.js";
import { appOnlineEvent } from "./app_online.js";

export function eventListener(slackActivity, web) {
  switch (slackActivity.event.type) {
    case "app_home_opened":
      appHomeOpenedEvent(slackActivity, web);
      break;

    default:
      console.log("Couldn't find slack event type!");
      break;
  }
}
