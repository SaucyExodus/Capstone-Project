
export function gloabalCreateTask(slackEvents, web) {
    slackEvents.on('global_create_task', async(event) => {
        try {
            console.log("Global create task was clicked!");
        } catch(error) {
            console.error(error);
        }
    });
}