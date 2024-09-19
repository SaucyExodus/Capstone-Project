import express from "express";
import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";

import { registerListeners } from "./src/listeners/index.js";
dotenv.config(); // Load environment variables from .env

const app = express();
const port = 80;

const web = new WebClient(process.env.SLACK_OAUTH_TOKEN);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/slack/events", (req, res) => {
  const data = req.body;

  if (data.type === "url_verification") {
    res.send({ challenge: data.challenge });
  } else {
    console.log(`Received POST data: `, JSON.stringify(data, null, 2));
    res.sendStatus(200);
  }
});

app.post("/slack/interactions", (req, res) => {
  const payload = JSON.parse(req.body.payload);

  console.log(`Received POST data: `, JSON.stringify(payload, null, 2));
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
