import { eventListener } from "./events/index.js";
import { shortcutListener } from "./shortcuts/index.js";

export function registerListeners(slackActivity, web) {
  console.log("enter listener");
  switch (slackActivity.type) {
    case "event_callback":
      eventListener(slackActivity, web);
      break;

    case "shortcut":
      shortcutListener(slackActivity, web);
      break;

    default:
      console.log("Couldn't find slack type!");
      break;
  }
}
