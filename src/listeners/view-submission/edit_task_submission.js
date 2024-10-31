export async function editTaskSubmission(slackActivity, web) {
    console.log("WE ARE IN EDIT TASK SUBMISSION");

    try {
        const { view } = slackActivity;
        const updatedTaskData = {
          taskId: view.private_metadata,
          taskName: view.state.values["task_name_input"]["task_name_action"].value,
          assignedUsers: view.state.values["assign_user_input"]["assign_user_action"].selected_users,
          dueDateTime: view.state.values["due_datetime_input"]["due_datetime_action"].selected_date_time,
          taskNotes: view.state.values["notes_input"]["notes_action"].rich_text_value,
          taskStatus: view.state.values["status_input"]["status_action"].selected_option.value,
        };

        await updatedTaskData(taskData);
        console.log("Extracted Task Data:", taskData);
    } catch (error) {

    }
}