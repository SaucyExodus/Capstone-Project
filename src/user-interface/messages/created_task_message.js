export function createdTaskMessage(taskData, formattedDate){
    const taskMessage = {
        channel: '#task-simply',
        text: `New Task Created by <@${taskData.userId}>: ${taskData.taskName}`,
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
                text: `*Due Date & Time:*\n${formattedDate}`
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
              text: `*Notes:*`
            }
          },
          taskData.taskNotes,
        ]
      };
    return taskMessage;
}
