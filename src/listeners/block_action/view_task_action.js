import { getTaskData } from "../../functions/getTaskData.js"

export async function viewTaskAction(slackActivity, web) {
    const taskId = slackActivity.actions[0]?.value;
    console.log(getTaskData(taskId));

}