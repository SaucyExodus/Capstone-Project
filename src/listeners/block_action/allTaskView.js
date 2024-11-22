import { viewAllTasks } from "../../user-interface/modules/view_all_tasks_ui.js";
import { getSavedTasks } from '../../functions/getSavedTasks.js'; 

export async function all_task_view(slackActivity, web, taskStatus, pageNumber, viewId) {
  try {
    const tasks = await getSavedTasks(slackActivity.user.id); // Fetch saved tasks assigned to the user
    let result;

    if (viewId) {
      result = await web.views.update({
        view_id: viewId,
        view: viewAllTasks(taskStatus, tasks, pageNumber)
      });
    } else {
      result = await web.views.open({
        trigger_id: slackActivity.trigger_id,
        view: viewAllTasks(taskStatus, tasks, pageNumber)
      });
    }
    return result.view.id;
  } catch (error) {
    console.error("Error opening view:", error);
  }
}