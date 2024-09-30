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

    // Format the message using Block Kit
    const taskMessage = {
      channel: '#task-simply', // Replace with your Slack channel ID
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*New Task Created by <@${taskData.userId}>*`
          }
        },
        {
          type: 'divider'
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Task Name:*\n${taskData.taskName}`
            },
            {
              type: 'mrkdwn',
              text: `*Due Date & Time:*\n${taskData.dueDateTime}`
            },
            {
              type: 'mrkdwn',
              text: `*Assigned Users:*\n${taskData.assignedUsers.map(user => `<@${user}>`).join(', ')}`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Task Notes:*\n${taskData.taskNotes}`
          }
        }
      ]
    };

    // Send the message to Slack
    await web.chat.postMessage(taskMessage);
    
    // Save task data (implement the `saveTaskData` function in your database module)

  } catch (error) {
    console.error("Error handling view submission:", error);
  }
}
