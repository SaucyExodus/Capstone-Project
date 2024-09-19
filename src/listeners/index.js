import { eventListener } from "./events/index.js";
import { shortcutListener } from "./shortcuts/index.js";

export function registerListeners(slackActivity, web) {
  switch (slackActivity.type) {
    case "event_callback": // Events
      eventListener(slackActivity, web);
      break;

    case "shortcut": // Shortcuts
      shortcutListener(slackActivity, web);
      break;

    default:
      console.log("Couldn't find slack type!");
      break;
  }
}
