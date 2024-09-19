import { createTaskSubmission } from './create_task_submission.js'; 

export async function viewSubmissionListener(slackActivity, web) {
  // Correctly access the callback_id from slackActivity.view
  const callbackId = slackActivity.view.callback_id;

  switch (callbackId) {
    case "create_task_modal":
      await createTaskSubmission(slackActivity, web);
      break;

    default:
      console.log("Couldn't find callback id for view submission");
      break;
  }
}
