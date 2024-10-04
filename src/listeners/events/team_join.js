import db from "../../config/db.js"

export function teamJoinedEvent(slackActivity, web) {
  // Handle the `team_join` event when a new user joins the Slack workspace
  const user = slackActivity.event.user;
  const username = user.name; // Get Slack username
  const userId = user.id; // Get Slack user ID

  // Prepare the MySQL query to insert the new user into the database
  const query = "INSERT INTO users (username, slack_user_id) VALUES (?, ?)";

  // Execute the query to insert user data into MySQL
  db.query(query, [username, userId], (err, results) => {
    if (err) {
      console.error("Error inserting user into database: ", err);
      return res.status(500).send("Database error");
    }
    console.log(`New user added to the database: ${username} (ID: ${userId})`);
  });
}
