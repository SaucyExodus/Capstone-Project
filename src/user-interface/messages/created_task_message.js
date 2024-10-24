export function createdTaskMessage(taskData) {
  const taskMessage = {
    channel: "#task-simply",
    color: "#f2c744",
    text: `New Task Created by <@${taskData.userId}>: ${taskData.taskName}`,
    attachments: [
      {
        color: "#f2c744",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*New Task Created by <@${taskData.userId}>*`,
            },
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
              value: taskData.taskId.toString(),
              text: {
                type: "plain_text",
                text: "View Task",
              },
            },
          },
        ],
      },
    ],
  };
  return taskMessage;
}
