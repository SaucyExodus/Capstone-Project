import { getTaskData } from "../../functions/getTaskData.js"
import { createViewTaskModal } from "../../user-interface/modules/task_view_ui.js";

export async function viewTaskAction(slackActivity, web, viewId) {
    const taskId = slackActivity.actions[0]?.value;
    const taskData = await getTaskData(taskId);

    try {
        await web.views.update({
            view_id: viewId,
            view: createViewTaskModal(taskData)
        });
    } catch(error){
        console.error("Error opening view:", error);
    }
}