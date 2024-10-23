import dayjs from 'dayjs';
import { createdTaskMessage } from '../../user-interface/messages/created_task_message.js';
import { TODO, IN_PROGRESS, DONE } from '../../constants/taskStatus.js';
import { saveTaskData } from '../../functions/saveTaskData.js';

export async function createTaskSubmission(slackActivity, web) {
  try {
    const { view, user } = slackActivity;
    const taskData = {
      userId: user.id,
      taskName: view.state.values["task_name_input"]["task_name_action"].value,
      assignedUsers: view.state.values["assign_user_input"]["assign_user_action"].selected_users,
      dueDateTime: view.state.values["due_datetime_input"]["due_datetime_action"].selected_date_time,
      taskNotes: view.state.values["notes_input"]["notes_action"].rich_text_value,
      taskStatus: TODO,
    };

    console.log("Extracted Task Data:", taskData);
    
    // Save task data
    await saveTaskData(taskData);

    // Send the message to Slack
    for (const assignedUser of taskData.assignedUsers) {
      // Retrieve user info including timezone offset
      const userInfo = await web.users.info({ user: assignedUser });
      const timezoneOffset = userInfo.user.tz_offset;

      // Adjust the timestamp based on the timezone offset
      const adjustedTimestamp = dayjs.unix(taskData.dueDateTime).add(timezoneOffset, 'second');

      // Format the adjusted timestamp
      const formattedDate = adjustedTimestamp.format('ddd, MMM D, YYYY h:mm A');
      

      await web.chat.postEphemeral({
        user: assignedUser,
        ...createdTaskMessage(taskData)
      });
    }

  } catch (error) {
    console.error("Error handling view submission:", error);
  }
}
