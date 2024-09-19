import express from 'express';
import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';

import { registerListeners } from './src/listeners/index.js';
dotenv.config(); // Load environment variables from .env

const app = express();
const port = 80;

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const data = req.body;
  console.log(`Received POST data: `, JSON.stringify(data, null, 2));
  //res.send(`Received POST data: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});