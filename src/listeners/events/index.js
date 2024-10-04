import { appHomeOpenedEvent } from "./app_home_opened.js";
import { teamJoinedEvent } from "./team_join.js";
import { appOnlineEvent } from "./app_online.js";

export function eventListener(slackActivity, web) {
  switch (slackActivity.event.type) {
    case "app_home_opened":
      appHomeOpenedEvent(slackActivity, web);
      break;

    case "team_join":
      teamJoinedEvent(slackActivity, web);
      break;

    default:
      console.log("Couldn't find slack event type!");
      break;
  }
}
