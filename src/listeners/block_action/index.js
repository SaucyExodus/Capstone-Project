import { createTaskAction } from "./create_task_action.js";
import { viewTaskAction } from "./view_task_action.js";

export function blockActionListener(slackActivity, web) {
  const actionId = slackActivity.actions[0]?.action_id;

  switch (actionId) {
    case "new_task":
      createTaskAction(slackActivity, web);
      break;

    case "view_task_button":
      viewTaskAction(slackActivity, web);
      break;

    case "help_modal":
      helpModal(slackActivity, web);
      break;

    default:
      console.log("Couldn't find action id for view submission");
      break;
  }
}
