import { createTaskSubmission } from "./create_task_submission.js";
import { openEditTaskSubmission } from "./open_edit_task_submission.js";
import { editTaskSubmission } from "./edit_task_submission.js";

export function viewSubmissionListener(slackActivity, web) {
  const callbackId = slackActivity.view.callback_id;

  switch (callbackId) {
    case "create_task_modal":
      createTaskSubmission(slackActivity, web);
      break;

    case "open_edit_task_modal":
      openEditTaskSubmission(slackActivity, web);
      break;

    case "edit_task_modal":
      editTaskSubmission(slackActivity, web);
      break;

    default:
      console.log("Couldn't find callback id for view submission");
      break;
  }
}
