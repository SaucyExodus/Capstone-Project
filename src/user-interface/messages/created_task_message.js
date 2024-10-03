export function createdTaskMessage(taskData){
    const unixTimestamp = taskData.dueDateTime;
    const date = new Date(unixTimestamp * 1000);

    const taskMessage = {
        channel: '#task-simply', 
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
                text: `*Due Date & Time:*\n${date}`
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
