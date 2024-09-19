import { eventListener } from './events/index.js';
import { shortcutListener } from './shortcuts/index.js';

export function registerListeners(slackActivity, web) {
    if(slackActivity.type === 'shortcut') {
        shortcutListener(slackActivity, web);
    } else {
        eventListener(slackActivity, web);
    }
}
