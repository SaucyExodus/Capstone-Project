import { eventListener } from './events/index.js';
import { shortcutListner } from './shortcuts/index.js';

export function registerListeners(slackActivity, web) {
    eventListener(slackActivity, web);
    shortcutListner(slackActivity, web);
}
