import { gloabalCreateTask } from './global_create_task';

export function eventListener(slackEvents, web) {
    gloabalCreateTask(slackEvents, web);
}