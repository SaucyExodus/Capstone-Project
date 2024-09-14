import express from 'express';
import dotenv from 'dotenv';
import { WebClient } from '@slack/web-api';
import { createEventAdapter } from '@slack/events-api';

import { registerListeners } from './src/listeners';

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
});

registerListeners(slackEvents);

