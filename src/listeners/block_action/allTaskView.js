import { viewAllTasks } from "../../user-interface/modules/view_all_tasks_ui.js";
import { getSavedTasks } from '../../functions/getSavedTasks.js'; 

export async function all_task_view(slackActivity, web, taskStatus) {
  try {
    const tasks = await getSavedTasks(slackActivity.user.id); // Fetch saved tasks assigned to the user
    
    const result = await web.views.open({
      trigger_id: slackActivity.trigger_id,
      view: viewAllTasks(taskStatus, tasks)
    });
    const viewId = result.view.id; // This is the view_id you will use for updates
    console.log("View opened with ID:", viewId);

  } catch (error) {
    console.error("Error opening view:", error);
  }
}