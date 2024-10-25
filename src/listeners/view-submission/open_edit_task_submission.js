import { getTaskData } from "../../functions/getTaskData.js";

export async function openEditTaskSubmission(slackActivity, web) {

    const taskId = slackActivity.view.private_metadata;
    const taskData = await getTaskData(taskId);
    console.log("Task Data:", taskData);

    /*
    const modalView = {
        type: 'modal',
        callback_id: 'edit_task_submission',
        title: {
            type: 'plain_text',
            text: 'Edit Task'
        },
        blocks: [
            {
                type: 'input',
                block_id: 'task_title',
                element: {
                    type: 'plain_text_input',
                    action_id: 'title_input',
                    initial_value: task.title
                },
                label: {
                    type: 'plain_text',
                    text: 'Task Title'
                }
            },
            {
                type: 'input',
                block_id: 'task_description',
                element: {
                    type: 'plain_text_input',
                    action_id: 'description_input',
                    multiline: true,
                    initial_value: task.description
                },
                label: {
                    type: 'plain_text',
                    text: 'Task Description'
                }
            },
            {
                type: 'input',
                block_id: 'task_due_date',
                element: {
                    type: 'datepicker',
                    action_id: 'due_date_input',
                    initial_date: task.due_date
                },
                label: {
                    type: 'plain_text',
                    text: 'Due Date'
                }
            }
        ]
    };

    await web.views.open({
        trigger_id: slackActivity.trigger_id,
        view: modalView
    });
    */
}