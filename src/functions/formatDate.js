// Send the message to Slack
/*
for (const assignedUser of taskData.assignedUsers) {
    // Retrieve user info including timezone offset
    const userInfo = await web.users.info({ user: assignedUser });
    const timezoneOffset = userInfo.user.tz_offset;

    // Adjust the timestamp based on the timezone offset
    const adjustedTimestamp = dayjs.unix(taskData.dueDateTime).add(timezoneOffset, 'second');

    // Format the adjusted timestamp
    const formattedDate = adjustedTimestamp.format('ddd, MMM D, YYYY h:mm A');
*/