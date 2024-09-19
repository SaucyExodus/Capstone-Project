export function viewSubmissionListener(slackActivity, web) {
  switch (slackActivity.callback_id) {
    case "create_task_modal":
      console.log("Yay you submitted it");
      break;

    default:
      console.log("Couldn't find callback id for view submission");
      break;
  }
}
