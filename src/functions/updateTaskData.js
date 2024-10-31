import db from "../config/db.js";

// Function to update task data
export async function updateTaskData(taskData) {
    const query = `
      UPDATE task_card
      SET task_name = ?,
          due_date = ?,
          assigned_users = ?,
          task_notes = ?,
          task_status = ?
      WHERE id = ?
    `;

    const values = [
      taskData.taskName,
      taskData.dueDateTime,
      JSON.stringify(taskData.assignedUsers),
      JSON.stringify(taskData.taskNotes),
      taskData.taskStatus,
      taskData.taskId,
    ];

    try {
      const results = await new Promise((resolve, reject) => {
        db.query(query, values, (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        });
      });

      return results; // Return the results of the update operation
    } catch (error) {
      throw new Error(`Error updating task data: ${error.message}`);
    }
}