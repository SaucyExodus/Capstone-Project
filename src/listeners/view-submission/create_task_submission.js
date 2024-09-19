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

    console.log("Slack Activity Payload:", JSON.stringify(slackActivity, null, 2));
    console.log("Extracted Task Data:", taskData);


    web.ack();
    // Save task data (implement the `saveTaskData` function in your database module)

    // Send a response back to Slack (optional)
    await web.views.update({
        trigger_id: slackActivity.trigger_id,
        view: {
          type: "modal",
          title: {
            type: "plain_text",
            text: "Task Created",
            emoji: true
          },
          close: {
            type: "plain_text",
            text: "Close",
            emoji: true
          },
          blocks: [
            {
              type: "section",
              block_id: "confirmation",
              text: {
                type: "mrkdwn",
                text: `Task created successfully:\n*Task Name:* ${taskData.taskName}\n*Assigned Users:* ${taskData.assignedUsers.join(', ')}\n*Due Date:* ${taskData.dueDate}\n*Due Time:* ${taskData.dueTime}`
              }
            }
          ]
        }
      });

  } catch (error) {
    console.error("Error handling view submission:", error);
  }
}
