import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { WebClient } from '@slack/web-api';
import { createEventAdapter } from '@slack/events-api';

import { registerListeners } from './src/listeners/index.js';

dotenv.config(); // Load environment variables from .env

const app = express();
const port = 80;

// Slack OAuth tokens asnd Signing Secret
const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET)

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const data = JSON.parse(req.body.payload);
  console.log(`Received POST data: `, JSON.stringify(data, null, 2));
  res.send(`Received POST data: ${JSON.stringify(data)}`);
});

// Starts Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Use the slackEvents middleware to handle Slack events
app.use('/slack/events', slackEvents.expressMiddleware());

registerListeners(slackEvents, web);

