import db from "../config/db.js";

export async function removeTaskData(taskId) {
  try {
    const query = "DELETE FROM task_card WHERE id = ?";
    db.query(query, [taskId], (error, results) => {
      if (error) {
        console.error(`Error deleting task with ID ${taskId}:`, error);
        return;
      }
      console.log(`Task with ID ${taskId} has been deleted.`);
    });
  } catch (error) {
    console.error(`Error deleting task with ID ${taskId}:`, error);
  }
}