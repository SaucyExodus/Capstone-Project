import express from 'express';
import { WebClient } from '@slack/web-api';
import { createEventAdapter } from '@slack/events-api'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const app = express();
const port = 80;

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET)

app.use(express.json());

app.post('/slack/events', (req, res) => {
  const data = req.body;
  console.log(`Received POST data: ${data}`);
  res.send(`Received POST data: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sendMessage('#test-bot', "I'm Online");
});

//Function to send a message to a Slack channel
async function sendMessage(channel, message) {
  try {
    const response = await web.chat.postMessage({
      channel: channel,
      text: message,
    });
    console.log('Message sent: ', response);
  } catch (error) {
    // Handle Slack API errors
    console.error('Error sending message:', error);
  }
}
