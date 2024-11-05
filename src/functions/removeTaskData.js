import db from "../config/db.js";

export async function removeTaskData(taskId) {
  try {
    const query = "DELETE FROM tasks WHERE id = ?";
    await db.execute(query, [taskId]);
    console.log(`Task with ID ${taskId} has been deleted.`);
  } catch (error) {
    console.error(`Error deleting task with ID ${taskId}:`, error);
  }
}