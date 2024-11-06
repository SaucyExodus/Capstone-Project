export function viewAllTasks(taskStatus, tasks) {
    const filteredTasks = tasks.filter(task => task.task_status === taskStatus);
  
    const taskBlocks = filteredTasks.map(task => ({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Task Created by <@${task.created_by}>*\n*Task Name:*\n${task.task_name}`,
      },
      accessory: {
        type: "button",
        action_id: "view_task_button",
        value: task.task_id.toString(),
        text: {
          type: "plain_text",
          text: "View Task",
        },
      },
    }));
  
    const modal = {
      type: "modal",
      close: {
        type: "plain_text",
        text: "Close",
        emoji: true
      },
      title: {
        type: "plain_text",
        text: `${taskStatus} Tasks`,
        emoji: true
      },
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `${taskStatus} Tasks`,
            emoji: true
          }
        },
        {
          type: "divider"
        },
        ...taskBlocks,
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Previous",
                emoji: true
              },
              value: "click_me_123",
              action_id: "actionId-0"
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Next",
                emoji: true
              },
              value: "click_me_123",
              action_id: "actionId-1"
            }
          ]
        }
      ]
    };
  
    return modal;
  }