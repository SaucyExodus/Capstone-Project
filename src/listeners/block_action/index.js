import { createTaskAction } from "./create_task_action.js";
import { viewTaskAction } from "./view_task_action.js";
import { helpview } from "./help_view.js";
import { handleDeleteTask } from "./handleDeleteTask.js";
import { all_task_view } from "./allTaskView.js";

export async function blockActionListener(slackActivity, web) {
  const actionId = slackActivity.actions[0]?.action_id;
  let viewId;

  switch (actionId) {
    case "new_task":
      createTaskAction(slackActivity, web);
      break;

    case "view_task_button":
      viewTaskAction(slackActivity, web);
      break;

    case "view_task_button_1":
      await viewTaskAction(slackActivity, web, viewId);
      break;

    case "help_modal":
      helpview(slackActivity, web);
      break;

    case "delete_task":
      handleDeleteTask(slackActivity, web);
      break;

    case "view_more_in_progress":
      all_task_view(slackActivity, web, 'IN_PROGRESS');
      break;

    case "view_more_todo":
      viewId = await all_task_view(slackActivity, web, 'TODO');
      break;

    case "view_more_completed":
      all_task_view(slackActivity, web, 'DONE');
      break;

    default:
      console.log("Couldn't find action id for view submission");
      break;
  }
}