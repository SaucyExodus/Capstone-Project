import { createTaskAction } from "./create_task_action.js";
import { viewTaskAction } from "./view_task_action.js";
import { helpview } from "./help_view.js";
import { handleDeleteTask } from "./handleDeleteTask.js";
import { all_task_view } from "./allTaskView.js";

const viewIdStore = {};
const pageNumberStore = {};

export async function blockActionListener(slackActivity, web) {
  const actionId = slackActivity.actions[0]?.action_id;
  const userId = slackActivity.user.id; // Assuming each user has their own session/view

  let viewId = viewIdStore[userId];
  let pageNumber = pageNumberStore[userId] || 1;

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
      viewId = await all_task_view(slackActivity, web, 'IN_PROGRESS', pageNumber);
      viewIdStore[userId] = viewId;
      break;

    case "view_more_todo":
      viewId = await all_task_view(slackActivity, web, 'TODO', pageNumber);
      viewIdStore[userId] = viewId;
      break;

    case "view_more_completed":
      viewId = await all_task_view(slackActivity, web, 'DONE', pageNumber);
      viewIdStore[userId] = viewId;
      break;

    case "next":
      pageNumber += 1;
      pageNumberStore[userId] = pageNumber;
      viewId = await all_task_view(slackActivity, web, 'TODO', pageNumber, viewId); // You might want to change 'IN_PROGRESS' to the appropriate task status
      viewIdStore[userId] = viewId;
      break;

    case "previous":
      pageNumber = Math.max(1, pageNumber - 1); // Ensure the page number does not go below 1
      pageNumberStore[userId] = pageNumber;
      viewId = await all_task_view(slackActivity, web, 'TODO', pageNumber, viewId); // You might want to change 'IN_PROGRESS' to the appropriate task status
      viewIdStore[userId] = viewId;
      break;

    default:
      console.log("Couldn't find action id for view submission");
      break;
  }
}