import { eventListener } from './events/index.js';

export function registerListeners(slackEvents, web) {
    eventListener(slackEvents, web);
}
