import { appHomeOpenedEvent } from './app_home_opened.js';
import { appOnlineEvent } from './app_online.js';

export function eventListener(slackEvents, web) {
    appHomeOpenedEvent(slackEvents, web);
    appOnlineEvent(slackEvents, web);
}