import { createNewTaskModal } from "../../user-interface/modules/new_task_ui.js";

export async function globalCreateTask(slackActivity, web) {
    try {
        await web.views.open({
            trigger_id: slackActivity.trigger_id,
            view: createNewTaskModal
        });
    } catch(error){
        console.error("Error opening view:", error);
    }
}