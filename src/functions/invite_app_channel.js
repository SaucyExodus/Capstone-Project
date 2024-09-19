export async function inviteAppChannel(web) {
  const channelName = "task-simply";
  const userList = JSON.parse(web.users.list());
  const users = userList.members;
  console.log(JSON.stringify(userList));
    
  try {
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
