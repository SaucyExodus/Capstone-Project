import express from "express";
import bodyParser from "body-parser";
import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

import { registerListeners } from "./src/listeners/index.js";
import { createApp } from "./src/functions/create_app.js";

function paginateObjects(objects, page = 1, objectsPerPage = 5) {
  // Calculate the start index and end index based on the page number and objects per page
  const startIndex = (page - 1) * objectsPerPage;
  const endIndex = startIndex + objectsPerPage;

  // Slice the objects array to get the correct range of items
  const pageItems = objects.slice(startIndex, endIndex);

  // Return the sliced list
  return pageItems;
}

// Example usage:

// List of objects (can be any type of objects you want)
const objectsList = [
  { id: 1, name: 'Object 1' },
  { id: 2, name: 'Object 2' },
  { id: 3, name: 'Object 3' },
  { id: 4, name: 'Object 4' },
  { id: 5, name: 'Object 5' },
  { id: 6, name: 'Object 6' },
  { id: 7, name: 'Object 7' },
  { id: 8, name: 'Object 8' },
  { id: 9, name: 'Object 9' },
  { id: 10, name: 'Object 10' },
  { id: 11, name: 'Object 11' },
  { id: 12, name: 'Object 12' }
];

// Get the first page (5 objects)
console.log(paginateObjects(objectsList, 1));

// Get the second page (next 5 objects)
console.log(paginateObjects(objectsList, 2));

// Get the third page (last 2 objects)
console.log(paginateObjects(objectsList, 3));


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
  res.send("");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
