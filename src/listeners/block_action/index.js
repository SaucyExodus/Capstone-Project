import { createTaskAction } from "./create_task_action.js";
import { viewTaskAction } from "./view_task_action.js";
import { helpview } from "./help_view.js";
import { handleDeleteTask } from "./handleDeleteTask.js";
import { all_task_view } from "./allTaskView.js";

const viewIdStore = {};
const pageNumberStore = {};
const statusStore = {};

export async function blockActionListener(slackActivity, web) {
  const actionId = slackActivity.actions[0]?.action_id;
  const userId = slackActivity.user.id; // Assuming each user has their own session/view

  let viewId = viewIdStore[userId];
  let pageNumber = pageNumberStore[userId] || 1;
  let status = statusStore[userId];
  

  switch (actionId) {
    case "new_task":
      createTaskAction(slackActivity, web);
      break;

    case "view_task_button":
      viewTaskAction(slackActivity, web, viewIdStore[userId]);
      delete viewIdStore[userId];
      delete pageNumberStore[userId];
      delete statusStore[userId];
      break;

    case "help_modal":
      helpview(slackActivity, web);
      break;

    case "delete_task":
      handleDeleteTask(slackActivity, web);
      break;

    case "view_more_in_progress":
      pageNumberStore[userId] = 1;
      status = 'IN_PROGRESS';
      statusStore[userId] = status;
      viewId = await all_task_view(slackActivity, web, statusStore[userId], pageNumberStore[userId]);
      viewIdStore[userId] = viewId;
      break;

    case "view_more_todo":
      pageNumberStore[userId] = 1;
      status = 'TODO';
      statusStore[userId] = status;
      viewId = await all_task_view(slackActivity, web, statusStore[userId], pageNumberStore[userId]);
      viewIdStore[userId] = viewId;
      break;

    case "view_more_completed":
      pageNumberStore[userId] = 1;
      status = 'DONE';
      statusStore[userId] = status;
      viewId = await all_task_view(slackActivity, web, statusStore[userId], pageNumberStore[userId]);
      viewIdStore[userId] = viewId;
      break;

    case "next":
      pageNumber += 1;
      pageNumberStore[userId] = pageNumber;
      viewId = await all_task_view(slackActivity, web, statusStore[userId], pageNumberStore[userId], viewIdStore[userId]); // You might want to change 'IN_PROGRESS' to the appropriate task status
      viewIdStore[userId] = viewId;
      break;

    case "previous":
      pageNumber = Math.max(1, pageNumber - 1); // Ensure the page number does not go below 1
      pageNumberStore[userId] = pageNumber;
      viewId = await all_task_view(slackActivity, web, statusStore[userId], pageNumberStore[userId], viewIdStore[userId]); // You might want to change 'IN_PROGRESS' to the appropriate task status
      viewIdStore[userId] = viewId;
      break;

    default:
      console.log("Couldn't find action id for view submission");
      break;
  }
}