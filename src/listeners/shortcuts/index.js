import { globalCreateTask } from './global_create_task.js';

export function shortcutListener(slackActivity, web) {
    switch (slackActivity.callback_id) {
        case 'global_create_task':
            globalCreateTask(slackActivity, web);
            break;
        default:
            console.log(`Couldn't find callback id.`);
            break;
    }
}