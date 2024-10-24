import { appHomeOpenedEvent } from "./app_home_opened.js";
import { teamJoinedEvent } from "./team_join.js";
import { appOnlineEvent } from "./app_online.js";
import { createTaskSubmission } from "../view-submission/create_task_submission.js"; // Adjust the path as needed

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