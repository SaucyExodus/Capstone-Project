import { createNewTaskModal } from "../../user-interface/modules/new_task_ui.js";

export async function globalCreateTask(slackActivity, web) {
    await createNewTaskModal(slackActivity, web);
}