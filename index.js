import express from 'express';
import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const app = express();
const port = 80;

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.post('/', (req, res) => {
  const data = req.body;
  console.log(`Received POST data: ${JSON.stringify(data)}`);
  res.send(`Received POST data: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  sendMessage('#test-bot', "I'm Online");
});

async function sendMessage(channel, message) {
  await web.chat.postMessage({
    channel: channel,
    text: message,
  })
}
