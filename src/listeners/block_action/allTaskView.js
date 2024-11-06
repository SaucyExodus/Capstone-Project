import { viewAllTasks } from "../../user-interface/modules/view_all_tasks_ui.js";

export async function all_task_view(slackActivity, web) {
    try {
        await web.views.open({
            trigger_id: slackActivity.trigger_id,
            view: viewAllTasks()
        });
    } catch(error){
        console.error("Error opening view:", error);
    }
}