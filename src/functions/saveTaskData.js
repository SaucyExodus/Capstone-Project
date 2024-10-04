import db from '../config/db.js';

// Function to save task data
export async function saveTaskData(taskData) {
  const { taskName, userId, assignedUsers, dueDateTime, taskNotes, taskStatus } = taskData;

  const query = `
    INSERT INTO task_card (task_name, created_by, due_date, assigned_users, task_notes, task_status)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [
    taskName,
    userId,
    dueDateTime, // Assuming dueDateTime is a Unix timestamp (e.g., 1729038000)
    JSON.stringify(assignedUsers), // Convert array to JSON string
    JSON.stringify(taskNotes), // Convert notes to JSON string
    taskStatus,
  ];

  return new Promise((resolve, reject) => {
    db.query(query, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}
