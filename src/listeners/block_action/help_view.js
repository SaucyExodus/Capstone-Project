import { helpModal } from "../../user-interface/modules/help_modal_ui.js";

export async function helpview(slackActivity, web) {
    try {
        await web.views.open({
            trigger_id: slackActivity.trigger_id,
            view: helpModal()
        });
    } catch(error){
        console.error("Error opening view:", error);
    }
}