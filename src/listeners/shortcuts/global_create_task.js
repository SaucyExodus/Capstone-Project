import { createNewTaskModal } from "../../user-interface/modules/new_task_ui";

export function globalCreateTask(slackActivity, web) {
    createNewTaskModal(slackActivity, web);
}