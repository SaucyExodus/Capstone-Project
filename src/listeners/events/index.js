const { appHomeOpenedEvent } = require('./app_home_opened');

module.exports.register = (slackEvents) => {
    appHomeOpenedEvent.register(slackEvents);
};