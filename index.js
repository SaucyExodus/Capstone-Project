import express from "express";
import bodyParser from "body-parser";
import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";

import { registerListeners } from "./src/listeners/index.js";
import { createApp } from "./src/functions/create_app.js";
import db from './src/config/db.js';  // Import the MySQL connection from db.js

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
    // Respond to Slack's URL verification request
    res.send({ challenge: data.challenge });
  } else if (data.event && data.event.type === "team_join") {
    // Handle the `team_join` event when a new user joins the Slack workspace
    const user = data.event.user;
    const username = user.name;  // Get Slack username
    const userId = user.id;      // Get Slack user ID

    // Prepare the MySQL query to insert the new user into the database
    const query = 'INSERT INTO users (username, slack_user_id) VALUES (?, ?)';

    // Execute the query to insert user data into MySQL
    db.query(query, [username, userId], (err, results) => {
      if (err) {
        console.error('Error inserting user into database: ', err);
        return res.status(500).send('Database error');
      }
      console.log(`New user added to the database: ${username} (ID: ${userId})`);
      res.sendStatus(200); // Respond back to Slack
    });
  } else {
    // Handle other Slack events
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
  res.send('');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});