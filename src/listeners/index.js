import { eventListener } from "./events/index.js";
import { shortcutListener } from "./shortcuts/index.js";
import { viewSubmissionListener } from "./view-submission/index.js";
import { blockActionListener } from "./block_action/index.js";

export function registerListeners(slackActivity, web) {
  switch (slackActivity.type) {
    case "event_callback": // Events
      eventListener(slackActivity, web);
      break;

    case "shortcut": // Shortcuts
      shortcutListener(slackActivity, web);
      break;

    case "view_submission": // View Submission
      viewSubmissionListener(slackActivity, web);
      break;

    case "block_action": // View Submission
      blockActionListener(slackActivity, web);
      break;

    default:
      console.log("Couldn't find slack type!");
      break;
  }
}
