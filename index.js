import express from 'express';
import dotenv from 'dotenv';
import { WebClient } from '@slack/web-api';
import { createEventAdapter } from '@slack/events-api';

import { registerListeners } from ('./src/listeners')

dotenv.config(); // Load environment variables from .env

const app = express();
const port = 80;

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET)

// Use the slackEvents middleware to handle Slack events
app.use('/slack/events', slackEvents.expressMiddleware());

// Body parser
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sendMessage('#test-bot', "I'm Online");
});

registerListeners(slackEvents);

//Function to send a message to a Slack channel
async function sendMessage(channel, message) {
  try {
    const response = await web.chat.postMessage({
      channel: channel,
      text: message,
    });
    console.log('Welcome message sent: ', response);
  } catch (error) {
    // Handle Slack API errors
    console.error('Error sending message:', error);
  }
}
