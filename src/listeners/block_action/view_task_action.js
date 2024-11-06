import { getTaskData } from "../../functions/getTaskData.js"
import { createViewTaskModal } from "../../user-interface/modules/task_view_ui.js";

export async function viewTaskAction(slackActivity, web) {
    const taskId = slackActivity.actions[0]?.value;
    console.log("Viewing task with ID:", taskId);
    const taskData = await getTaskData(taskId);
    //sonview_id = 

    try {
        await web.views.update({
            view_id: slackActivity.external_id,
            view: createViewTaskModal(taskData)
        });
    } catch(error){
        console.error("Error opening view:", error);
    }
}