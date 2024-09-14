import express from 'express';
import { WebClient } from '@slack/web-api';
import { createEventAdapter } from '@slack/events-api'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const app = express();
const port = 80;

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET)


app.use('/slack/events', slackEvents.expressMiddleware());

app.use(express.json());

app.post('/slack/events', (req, res) => {
  const data = req.body;
  res.send(`Received POST data: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sendMessage('#test-bot', "I'm Online");
});

slackEvents.on('app_home_opened', async (event) => {
  console.log(`App Home opened by user ${event.user}`);
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
