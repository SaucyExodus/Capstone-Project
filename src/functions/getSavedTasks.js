import db from "../config/db.js";

// Function to fetch saved tasks assigned to a specific user
export async function getSavedTasks(userId) {
  const query = `
    SELECT id AS task_id, task_name, created_by, due_date, assigned_users, task_notes, task_status
    FROM task_card
    WHERE JSON_CONTAINS(assigned_users, ?)
  `;

  const values = [`"${userId}"`]; // Ensure the userId is correctly formatted as a JSON string

  try {
    const tasks = await new Promise((resolve, reject) => {
      db.query(query, values, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });

    // Parse JSON fields
    tasks.forEach(task => {
      task.assigned_users = JSON.parse(task.assigned_users);
      task.task_notes = JSON.parse(task.task_notes);
    });

    return tasks;
  } catch (error) {
    throw new Error(`Error fetching tasks: ${error.message}`);
  }
}