import { updateTaskData } from "../../functions/updateTaskData.js";
import { appHomeOpenedUI } from "../../user-interface/app-home/home_tab.js";

export async function editTaskSubmission(slackActivity, web) {
  try {
    const { view, user } = slackActivity;
    const updatedTaskData = {
      taskId: view.private_metadata,
      taskName: view.state.values["task_name_input"]["task_name_action"].value,
      assignedUsers: view.state.values["assign_user_input"]["assign_user_action"].selected_users,
      dueDateTime: view.state.values["due_datetime_input"]["due_datetime_action"].selected_date_time,
      taskNotes: view.state.values["notes_input"]["notes_action"].rich_text_value,
      taskStatus: view.state.values["status_input"]["status_action"].selected_option.value,
    };

    await updateTaskData(updatedTaskData);

    // Update the home tab
    const homeView = await appHomeOpenedUI(); // Fetch updated home view
    await web.views.publish({
      user_id: user.id,
      view: homeView,
    });
    
  } catch (error) {
    console.error("Error handling view submission:", error);
  }
}
