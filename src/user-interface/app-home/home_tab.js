import { getSavedTasks } from '../../functions/getSavedTasks.js'; // Function to fetch saved tasks

export async function appHomeOpenedUI(userId) {
  const tasks = await getSavedTasks(userId); // Fetch saved tasks assigned to the user

  // Count the number of tasks
  const inProgressCount = tasks.filter(task => task.task_status === 'IN_PROGRESS').length;
  const todoCount = tasks.filter(task => task.task_status === 'TODO').length;
  const doneCount = tasks.filter(task => task.task_status === 'DONE').length;

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "Task Tracker",
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Create New Task",
            emoji: true,
          },
          style: "primary",
          value: "create_task",
          action_id: "new_task",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Open Kanban Board",
            emoji: true,
          },
          value: "open_kanban",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Help",
            emoji: true,
          },
          value: "help",
          action_id: "help_modal",
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:construction: *In Progress Tasks* :construction:   *|  Total:* ${inProgressCount}`
      }
    },
    {
			type: "actions",
			elements: [
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "View more",
						emoji: true
					},
					value: "click_me_123",
					action_id: "view_more_in_progress"
				}
			]
		},
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true
      }
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:pencil: *To-Do Tasks* :pencil:  *|  Total:* ${todoCount}`
      }
    },
    {
			type: "actions",
			elements: [
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "View more",
						emoji: true
					},
					value: "click_me_123",
					action_id: "view_more_todo"
				}
			]
		},
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true
      }
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: " ",
        emoji: true
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:white_check_mark: *Completed Tasks* :white_check_mark:   *|  Total:* ${doneCount}`
      }
    },
    {
			type: "actions",
			elements: [
				{
					type: "button",
					text: {
						type: "plain_text",
						text: "View more",
						emoji: true
					},
					value: "click_me_123",
					action_id: "view_more_completed"
				}
			]
		},
    {
      type: "divider"
    }
  ];

  // Find the index positions for each task category
  const inProgressIndex = blocks.findIndex(block => block.text && block.text.text.includes("In Progress Tasks"));
  const toDoIndex = blocks.findIndex(block => block.text && block.text.text.includes("To-Do Tasks"));

  // Arrays to hold tasks by status
  let inProgressTasks = [];
  let toDoTasks = [];
  let completedTasks = [];

  // Categorize tasks by status
  tasks.forEach(task => {
    const dueDateText = task.due_date ? `*Due date:* <!date^${task.due_date}^{date} at {time}| Invalid Date >` : "No Due Date";
    const taskBlock = {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Task Name:* ${task.task_name}\n${dueDateText}\n*Status:* ${task.task_status === 'TODO' ? 'To Do' : task.task_status === 'IN_PROGRESS' ? 'In Progress' : 'Completed'}`,
      },
      accessory: {
        type: "button",
        action_id: "view_task_button",
        value: task.task_id.toString(), // Use task_id instead of taskId
        text: {
          type: "plain_text",
          text: "View Task",
        },
      },
    };

    switch (task.task_status) { // Use task.task_status instead of task.status
      case 'IN_PROGRESS':
        inProgressTasks.push({ task, taskBlock });
        break;
      case 'TODO':
        toDoTasks.push({ task, taskBlock });
        break;
      case 'DONE':
        completedTasks.unshift({ task, taskBlock }); 
        break;
      default:
        console.log(`Unknown status: ${task.task_status}`);
        break;
    }
  });

  // Sort In Progress tasks by due date and then by creation date
  inProgressTasks.sort((a, b) => {
    const dateA = a.task.due_date ? new Date(a.task.due_date) : new Date(8640000000000000); // Max date if no due date
    const dateB = b.task.due_date ? new Date(b.task.due_date) : new Date(8640000000000000); // Max date if no due date
    if (dateA - dateB !== 0) return dateA - dateB;
    const createdA = a.task.created_at ? new Date(a.task.created_at) : new Date(0); // Default to epoch if no date
    const createdB = b.task.created_at ? new Date(b.task.created_at) : new Date(0); // Default to epoch if no date
    return createdA - createdB;
  });

  // Sort TODO tasks by due date and then by creation date
  toDoTasks.sort((a, b) => {
    const dateA = a.task.due_date ? new Date(a.task.due_date) : new Date(8640000000000000); // Max date if no due date
    const dateB = b.task.due_date ? new Date(b.task.due_date) : new Date(8640000000000000); // Max date if no due date
    if (dateA - dateB !== 0) return dateA - dateB;
    const createdA = a.task.created_at ? new Date(a.task.created_at) : new Date(0); // Default to epoch if no date
    const createdB = b.task.created_at ? new Date(b.task.created_at) : new Date(0); // Default to epoch if no date
    return createdA - createdB;
  });

  // Get the oldest 5 In Progress tasks
  inProgressTasks = inProgressTasks.slice(0, 5).flatMap(({ taskBlock }) => [taskBlock, { type: "divider" }]);

  // Get the oldest 5 TODO tasks
  toDoTasks = toDoTasks.slice(0, 5).flatMap(({ taskBlock }) => [taskBlock, { type: "divider" }]);

  // Get the 5 most recent completed tasks
  completedTasks = completedTasks.slice(0, 5).flatMap(({ taskBlock }) => [taskBlock, { type: "divider" }]);

  // Insert tasks into their respective sections
  blocks.splice(inProgressIndex + 3, 0, ...inProgressTasks);
  blocks.splice(toDoIndex + 3 + inProgressTasks.length, 0, ...toDoTasks);
  blocks.splice(15 + inProgressTasks.length + toDoTasks.length, 0, ...completedTasks);

  return {
    type: 'home',
    blocks: blocks
  };
}