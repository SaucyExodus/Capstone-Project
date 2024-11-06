import { createTaskAction } from "./create_task_action.js";
import { viewTaskAction } from "./view_task_action.js";
import { helpview } from "./help_view.js";
import { handleDeleteTask } from "./handleDeleteTask.js";
import { all_task_view } from "./allTaskView.js";

const viewIdStore = {};

export async function blockActionListener(slackActivity, web) {
  const actionId = slackActivity.actions[0]?.action_id;
  const userId = slackActivity.user.id; // Assuming each user has their own session/view
  let viewId = viewIdStore[userId];

  switch (actionId) {
    case "new_task":
      createTaskAction(slackActivity, web);
      break;

    case "view_task_button":
      viewTaskAction(slackActivity, web, viewIdStore[userId]);
      delete viewIdStore[userId];
      break;

    case "help_modal":
      helpview(slackActivity, web);
      break;

    case "delete_task":
      handleDeleteTask(slackActivity, web);
      break;

    case "view_more_in_progress":
      viewId = await all_task_view(slackActivity, web, 'IN_PROGRESS');
      viewIdStore[userId] = viewId;
      break;

    case "view_more_todo":
      viewId = await all_task_view(slackActivity, web, 'TODO');
      viewIdStore[userId] = viewId;
      break;

    case "view_more_completed":
      viewId = await all_task_view(slackActivity, web, 'DONE');
      viewIdStore[userId] = viewId;
      break;

    default:
      console.log("Couldn't find action id for view submission");
      break;
  }
}