const eventsListener = require('./events');

module.exports.registerListeners = (slackEvents) => {
    eventsListener.register(slackEvents);
};