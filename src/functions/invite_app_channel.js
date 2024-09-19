export async function inviteAppChannel(web, channelID) {
  try {
    const userList = await web.users.list();
    const users = userList.members;

    for (const user of users) {
      if (!user.is_bot && !user.deleted) {
        await web.conversations.invite({
          channel: channelID,
          users: user.id,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}
