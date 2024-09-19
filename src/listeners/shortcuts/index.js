import { globalCreateTask } from './global_create_task.js';

export async function shortcutListener(slackActivity, web) {
    switch (slackActivity.callback_id) {
        case 'global_create_task':
            globalCreateTask(slackActivity, web);
            break;

        case 'test_callback':
            await web.views.open({
                "trigger_id": slackActivity.trigger_id,
  "view": {
    "type": "modal",
    "callback_id": "modal-identifier",
    "title": {
      "type": "plain_text",
      "text": "Just a modal"
    },
    "blocks": [
      {
        "type": "section",
        "block_id": "section-identifier",
        "text": {
          "type": "mrkdwn",
          "text": "*Welcome* to ~my~ Block Kit _modal_!"
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Just a button"
          },
          "action_id": "button-identifier"
        }
      }
    ]
  }
                  
            });
            break;

        default:
            console.log(`Couldn't find callback id.`);
            break;
    }
}