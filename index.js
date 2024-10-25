import express from "express";
import bodyParser from "body-parser";
import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";
//import pkg from '@slack/bolt'; // Import the default export
//const { App } = pkg; // Destructure the App class

dotenv.config(); // Load environment variables from .env

import { registerListeners } from "./src/listeners/index.js";
import { createApp } from "./src/functions/create_app.js";
import { setupEventListeners } from "./src/listeners/events/index.js"; // Import the setup function

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

// Set up event listeners
setupEventListeners(app);

// Start the server
expressApp.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Start your Slack app
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();