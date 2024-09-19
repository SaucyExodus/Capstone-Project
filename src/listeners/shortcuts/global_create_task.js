import { createNewTaskModal } from "../../user-interface/modules/new_task_ui.js";

export function globalCreateTask(slackActivity, web) {
    createNewTaskModal(slackActivity, web);
}