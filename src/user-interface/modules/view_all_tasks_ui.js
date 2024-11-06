export function viewAllTasks(taskStatus, tasks) {
    const statusMap = {
      'IN_PROGRESS': 'In Progress',
      'TODO': 'To Do',
      'DONE': 'Completed'
    };
  
    const filteredTasks = tasks.filter(task => task.task_status === taskStatus);
    const taskCount = filteredTasks.length;
  
    const taskBlocks = filteredTasks.map(task => ({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Task Created by <@${task.created_by}>*\n*Task Name:*\n${task.task_name}`,
      },
      accessory: {
        type: "button",
        action_id: "view_task_button_1",
        value: task.task_id.toString(),
        text: {
          type: "plain_text",
          text: "View Task",
        },
      },
    }));
  
    const modal = {
      type: "modal",
      external_id: "test",
      close: {
        type: "plain_text",
        text: "Close",
        emoji: true
      },
      title: {
        type: "plain_text",
        text: `${statusMap[taskStatus]} Tasks`,
        emoji: true
      },
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `Total number of ${statusMap[taskStatus]} tasks: ${taskCount}`,
            emoji: true
          }
        },
        {
          type: "divider"
        },
        ...taskBlocks,
        {
            type: "divider"
        },
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