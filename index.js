import express from "express";
import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";

import { registerListeners } from "./src/listeners/index.js";
import { createApp } from "./src/functions/create_app.js";
dotenv.config(); // Load environment variables from .env

const app = express();
const port = 80;

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);

// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

createApp(web);

// Handle Slack events
app.post("/slack/events", (req, res) => {
  const data = req.body;

  if (data.type === "url_verification") {
    res.send({ challenge: data.challenge });
  } else {
    console.log(`Received Slack Event data: `, JSON.stringify(data, null, 2));
    registerListeners(data, web);
    res.sendStatus(200);
  }
});

// Handle Slack interactions
app.post("/slack/interactions", (req, res) => {
  const payload = JSON.parse(req.body.payload);

  console.log(`Received Slack Interaction data: `, JSON.stringify(payload, null, 2));
  registerListeners(payload, web);
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


