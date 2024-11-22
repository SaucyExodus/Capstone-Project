import { helpModal, updateModalWithImages } from "../../user-interface/modules/help_modal_ui.js";

export async function helpview(slackActivity, web) {
    try {
        let modal = helpModal();
        updateModalWithImages(modal);
        await web.views.open({
            trigger_id: slackActivity.trigger_id,
            view: modal
        });
    } catch (error) {
        console.error("Error opening view:", error);
    }
}