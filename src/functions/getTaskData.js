import connection from '../config/db.js';

export async function getTaskData(taskId) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM task_card WHERE id = ?', [taskId], (error, results) => {
      if (error) {
        return reject(error);
      }
      if (results.length === 0) {
        return reject(new Error('Task not found'));
      }
      resolve(results[0]);
    });
  });
}
