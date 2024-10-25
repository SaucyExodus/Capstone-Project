import { getTaskData } from "../../functions/getTaskData.js"
import { createViewTaskModal } from "../../user-interface/modules/task_view_ui.js";

export async function viewTaskAction(slackActivity, web) {
    const taskId = slackActivity.actions[0]?.value;
    const taskData = await getTaskData(taskId);
    console.log("Task Data:", taskData);

    try {
        await web.views.open({
            trigger_id: slackActivity.trigger_id,
            view: createViewTaskModal(taskData)
        });
    } catch(error){
        console.error("Error opening view:", error);
    }
}