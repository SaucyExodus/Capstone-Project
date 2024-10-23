export function createdTaskMessage(taskData, taskID) {
  const taskMessage = {
    channel: "#task-simply",
    text: `New Task Created by <@${taskData.userId}>: ${taskData.taskName}`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*New Task Created by <@${taskData.userId}>*`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Task Name:*\n${taskData.taskName}`,
        },
        accessory: {
          type: "button",
          action_id: "view_task_button",
          value: taskID.toString(),
          text: {
            type: "plain_text",
            text: "View Task",
          },
        },
      },
    ],
  };
  return taskMessage;
}
