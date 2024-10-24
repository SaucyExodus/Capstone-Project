import express from "express";
import bodyParser from "body-parser";
import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";
import { App } from '@slack/bolt';

dotenv.config(); // Load environment variables from .env

import { registerListeners } from "./src/listeners/index.js";
import { createApp } from "./src/functions/create_app.js";
import { appHomeOpenedEvent } from "./src/listeners/events/app_home_opened.js";
import { createTaskSubmission } from "./src/listeners/view-submission/create_task_submission.js";

const expressApp = express();
const port = 80;

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);

// Initialize your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Middleware to parse incoming JSON and URL-encoded data
expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(bodyParser.json());

// Handle Slack events
expressApp.post("/slack/events", (req, res) => {
  const data = req.body;

  if (data.type === "url_verification") {
    // Respond to Slack's URL verification request
    res.send({ challenge: data.challenge });
  } else {
    // Handle other Slack events
    console.log(`Received Slack Event data: `, JSON.stringify(data, null, 2));
    registerListeners(data, web);
    res.sendStatus(200);
  }
});

// Handle Slack interactions
expressApp.post("/slack/interactions", (req, res) => {
  const payload = JSON.parse(req.body.payload);

  console.log(`Received Slack Interaction data: `, JSON.stringify(payload, null, 2));
  registerListeners(payload, web);
  res.send("");
});

// Listen for the app_home_opened event
app.event('app_home_opened', async ({ event, client, context }) => {
  await appHomeOpenedEvent({ event, client, context });
});

// Listen for the create_task_modal view submission
app.view('create_task_modal', async ({ ack, body, view, client, context }) => {
  await ack();
  await createTaskSubmission({ view, user: body.user }, client);
});

// Start the server
expressApp.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
