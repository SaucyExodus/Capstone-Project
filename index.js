import express from "express";
import bodyParser from 'body-parser';
import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";

import { registerListeners } from "./src/listeners/index.js";
import { createApp } from "./src/functions/create_app.js";
dotenv.config(); // Load environment variables from .env

const app = express();
const port = 80;

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);

// Middleware to parse incoming JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//createApp(web);

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
app.post("/slack/interactions", async (req, res) => {
  console.log(req.body);
  const { trigger_id } = req.body;

  const modal = {
    type: 'modal',
    callback_id: 'modal-identifier',
    title: {
      type: 'plain_text',
      text: 'My Modal'
    },
    submit: {
      type: 'plain_text',
      text: 'Submit'
    },
    close: {
      type: 'plain_text',
      text: 'Close'
    },
    blocks: [
      {
        type: 'input',
        block_id: 'input_block',
        element: {
          type: 'plain_text_input',
          action_id: 'input_action'
        },
        label: {
          type: 'plain_text',
          text: 'Enter something'
        }
      }
    ]
  };

  await web.views.open({
    trigger_id: trigger_id,
    view: modal
  });

  res.send('');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


