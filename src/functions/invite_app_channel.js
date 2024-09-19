export async function inviteAppChannel(web) {
  const channelName = "#task-simply";

  try {
    const userList = await web.users.list();
    const users = userList.members;

    for (const user of users) {
      if (!user.is_bot && !user.deleted) {
        await web.conversations.invite({
          channel: channelName,
          users: user.id,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}
