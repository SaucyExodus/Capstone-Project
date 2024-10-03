import dayjs from 'dayjs'; // Import dayjs for date formatting
import { createdTaskMessage } from '../../user-interface/messages/created_task_message';

export async function createTaskSubmission(slackActivity, web) {
  try {
    const { view, user } = slackActivity;
    const taskData = {
      userId: user.id,
      taskName: view.state.values["task_name_input"]["task_name_action"].value,
      dueDateTime: view.state.values["due_datetime_input"]["due_datetime_action"].selected_date_time,
      assignedUsers: view.state.values["assign_user_input"]["assign_user_action"].selected_users,
      taskNotes: view.state.values["notes_input"]["notes_action"].rich_text_value,
    };

    console.log("Extracted Task Data:", taskData);
    
    /*
    const unixTimestamp = taskData.dueDateTime;
    const date = new Date(unixTimestamp * 1000);

    console.log(date.toString());

    const formattedDueDateTime = dayjs.unix(taskData.dueDateTime).format('MMMM D, YYYY h:mm A');
    */

    // Send the message to Slack
    await web.chat.postMessage(createdTaskMessage(taskData));
    
    // Save task data (implement the `saveTaskData` function in your database module)

  } catch (error) {
    console.error("Error handling view submission:", error);
  }
}
