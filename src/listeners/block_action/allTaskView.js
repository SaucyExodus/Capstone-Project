import { viewAllTasks } from "../../user-interface/modules/view_all_tasks_ui.js";
import { getSavedTasks } from '../../functions/getSavedTasks.js'; 

export async function all_task_view(slackActivity, web, taskStatus) {
  try {
    const tasks = await getSavedTasks(slackActivity.user.id); // Fetch saved tasks assigned to the user
    console.log("Viewing ID: ", slackActivity.container.view_id);
    await web.views.open({
      trigger_id: slackActivity.trigger_id,
      //private_metadata: slackActivity.container.view_id,
      view: viewAllTasks(taskStatus, tasks)
    });
  } catch (error) {
    console.error("Error opening view:", error);
  }
}