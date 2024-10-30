import { getTaskData } from "../../functions/getTaskData.js";
import { editTaskModal } from "../../user-interface/modules/edit_task_ui.js";

export async function openEditTaskSubmission(slackActivity, web) {

    const taskId = slackActivity.view.private_metadata;
    const taskData = await getTaskData(taskId);

    try {
        await web.views.open({
            response_action: "update",
            view: editTaskModal(taskData)
        });
    }
    catch (error) {
        console.error(error);
    }

}