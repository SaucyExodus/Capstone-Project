export function viewAllTasks(taskStatus, tasks) {
    const statusMap = {
      'IN_PROGRESS': 'In Progress',
      'TODO': 'To Do',
      'DONE': 'Completed'
    };
  
    const filteredTasks = tasks.filter(task => task.task_status === taskStatus);
    const taskCount = filteredTasks.length;

    const totalPages = Math.ceil(taskCount / 5);
    console.log(totalPages);
    console.log(filteredTasks);
    console.log(paginateObjects(filteredTasks, 2));
  
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
  
  // Example usage:
  
  // List of objects (can be any type of objects you want)
  // const objectsList = [
  //   { id: 1, name: 'Object 1' },
  //   { id: 2, name: 'Object 2' },
  //   { id: 3, name: 'Object 3' },
  //   { id: 4, name: 'Object 4' },
  //   { id: 5, name: 'Object 5' },
  //   { id: 6, name: 'Object 6' },
  //   { id: 7, name: 'Object 7' },
  //   { id: 8, name: 'Object 8' },
  //   { id: 9, name: 'Object 9' },
  //   { id: 10, name: 'Object 10' },
  //   { id: 11, name: 'Object 11' },
  //   { id: 12, name: 'Object 12' }
  // ];
  
  // // Get the first page (5 objects)
  // //console.log(paginateObjects(objectsList, 1));
  
  // // Get the second page (next 5 objects)
  // //console.log(paginateObjects(objectsList, 2));
  
  // // Get the third page (last 2 objects)
  // //console.log(paginateObjects(objectsList, 3));
  