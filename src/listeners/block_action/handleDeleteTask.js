import { removeTaskData } from "../../functions/removeTaskData.js";
import { appHomeOpenedUI } from "../../user-interface/app-home/home_tab.js";

export async function handleDeleteTask(slackActivity, web) {
  try {
    const { user, actions } = slackActivity;
    const taskId = actions[0].value;

    await removeTaskData(taskId);

    // Update the home tab
    const homeView = await appHomeOpenedUI(user.id); // Fetch updated home view
    await web.views.publish({
      user_id: user.id,
      view: homeView,
    });

  } catch (error) {
    console.error("Error handling delete task:", error);
  }
}