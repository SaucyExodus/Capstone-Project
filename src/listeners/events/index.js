import { appHomeOpenedEvent } from './app_home_opened';

export function eventListener(slackEvents, web) {
    appHomeOpenedEvent(slackEvents, web);
}