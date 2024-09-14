const { eventsListener } = require('./events');

function register(slackEvents) {
    eventsListener(slackEvents);
}

module.exports = { register };