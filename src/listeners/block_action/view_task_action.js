import { getTaskData } from "../../functions/getTaskData.js"
import { createViewTaskModal } from "../../user-interface/modules/task_view_ui.js";

export async function viewTaskAction(slackActivity, web) {
    const taskId = slackActivity.actions[0]?.value;
    const taskData = await getTaskData(taskId);

    try {
        await web.views.open({
            trigger_id: slackActivity.trigger_id,
            view: createViewTaskModal(taskData.RowDataPacket)
        });
    } catch(error){
        console.error("Error opening view:", error);
    }
}