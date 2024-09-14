import { appHomeOpenedEvent } from './app_home_opened.js';

export function eventListener(slackEvents, web) {
    appHomeOpenedEvent(slackEvents, web);
}