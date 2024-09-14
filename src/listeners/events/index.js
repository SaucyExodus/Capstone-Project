const { appHomeOpenedEvent } = require('./app_home_opened');

function register(slackEvents) {
    appHomeOpenedEvent(slackEvents);
}

module.exports = { register };