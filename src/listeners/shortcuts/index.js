import { gloabalCreateTask } from './global_create_task';

export function shortcutListnerListener(slackActivity, web) {
    switch (slackActivity.callback_id) {
        case 'global_create_task':
            gloabalCreateTask(slackActivity, web);
            break;
        default:
            console.log(`Couldn't find callback id.`);
            break;
    }
}