import { appHomeOpenedEvent } from "./app_home_opened.js";
import { teamJoinedEvent } from "./team_join.js";
import { appOnlineEvent } from "./app_online.js";
import { createTaskSubmission } from "../view-submission/create_task_submission.js"; 
import { editTaskModal } from "../../user-interface/modules/edit_task_ui.js"; 
import { handleDeleteTask } from "../block_action/handleDeleteTask.js";

export function setupEventListeners(app) {
  // Listen for the app_home_opened event
  app.event('app_home_opened', async ({ event, client, context }) => {
    await appHomeOpenedEvent({ event, client, context });
  });

  // Listen for the create_task_modal view submission
  app.view('create_task_modal', async ({ ack, body, view, client, context }) => {
    await ack();
    await createTaskSubmission({ view, user: body.user }, client);
  });

  // Listen for the edit_task_button action
  app.action('edit_task_button', async ({ ack, body, client }) => {
    await ack();
    const modal = editTaskModal();
    await client.views.open({
      trigger_id: body.trigger_id,
      view: modal
    });
  });

  // Listen for the edit_task_modal view submission
  app.view('edit_task_modal', async ({ ack, body, view, client, context }) => {
    await ack();
    // Handle the view submission here
  });

  // Listen for the view_task_modal view submission
  app.view('view_task_modal', async ({ ack, body, view, client, context }) => {
    await ack();
    // Handle the view submission here
  });

  // Listen for the delete-task action
  app.action('delete-task', async ({ ack, body, client }) => {
    await ack();
    await handleDeleteTask(body, client);
  });
}

export function eventListener(slackActivity, web) {
  switch (slackActivity.event.type) {
    case "app_home_opened":
      appHomeOpenedEvent(slackActivity, web);
      break;

    case "team_join":
      teamJoinedEvent(slackActivity, web);
      break;

    default:
      console.log("Couldn't find slack event type!");
      break;
  }
}