import { createTaskAction } from "./create_task_action.js";

export function blockActionListener(slackActivity, web) {

  const actionId = slackActivity.actions.action_id;
  console.log(slackActivity)

  switch (actionId) {
    case "new_task":
      createTaskAction(slackActivity, web);
      break;

    default:
      console.log("Couldn't find action id for view submission");
      break;
  }
}
