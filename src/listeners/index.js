import { eventListener } from './events/index.js';
import { shortcutListener } from './shortcuts/index.js';

export function registerListeners(slackActivity, web) {
    eventListener(slackActivity, web);
    shortcutListener(slackActivity, web);
}
