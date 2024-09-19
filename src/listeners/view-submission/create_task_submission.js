export async function createTaskSubmission(slackActivity, web) {
  try {
    const { view, user } = slackActivity;
    const taskData = {
      userId: user.id,
      taskName: view.state.values["task_name_input"]["task_name_action"].value,
      assignedUsers: view.state.values["assign_user_input"]["assign_user_action"].selected_users,
      dueDate: view.state.values["due_date_input"]["due_date_action"].selected_date,
      dueTime: view.state.values["time_input"]["time_action"].selected_time,
    };

    console.log("Extracted Task Data:", taskData);
    // Save task data (implement the `saveTaskData` function in your database module)


  } catch (error) {
    console.error("Error handling view submission:", error);
  }
}
