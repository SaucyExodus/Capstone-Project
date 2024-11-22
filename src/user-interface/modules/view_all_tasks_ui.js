export function viewAllTasks(taskStatus, tasks, pageNumber) {
    const statusMap = {
      'IN_PROGRESS': 'In Progress',
      'TODO': 'To Do',
      'DONE': 'Completed'
    };
  
    const filteredTasks = tasks.filter(task => task.task_status === taskStatus);
    const taskCount = filteredTasks.length;
    const totalPages = Math.ceil(taskCount / 5);
  
    const taskBlocks = paginateObjects(filteredTasks, pageNumber).map(task => (
      {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Task Name:* ${task.task_name}\n${task.due_date ? `*Due date:* <!date^${task.due_date}^{date} at {time}| Invalid Date >` : "No Due Date"}`,
      },
      accessory: {
        type: "button",
        action_id: "view_task_button",
        value: task.task_id.toString(),
        text: {
          type: "plain_text",
          text: "View Task",
        },
        style: "primary",
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
              value: "previous",
              action_id: "previous"
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Next",
                emoji: true
              },
              value: "next",
              action_id: "next"
            }
          ]
        }
      ]
    };
  
    return modal;
  }

  function paginateObjects(objects, page = 1, objectsPerPage = 5) {
    // Calculate the start index and end index based on the page number and objects per page
    const startIndex = (page - 1) * objectsPerPage;
    const endIndex = startIndex + objectsPerPage;
  
    // Slice the objects array to get the correct range of items
    const pageItems = objects.slice(startIndex, endIndex);
  
    // Return the sliced list
    return pageItems;
  }