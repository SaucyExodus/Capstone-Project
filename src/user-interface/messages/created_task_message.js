export function createdTaskMessage(taskData) {
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
        action_id: "view_task_button",
        value: taskData.taskId,
        text: {
          type: "mrkdwn",
          text: `*Task Name:*\n${taskData.taskName}`,
        },
        accessory: {
          type: "button",
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
