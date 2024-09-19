export async function createApp(web) {
  const channelID = await createAppChannel(web);
  inviteAppChannel(web, channelID)
}

async function createAppChannel(web) {
    const channelName = "task-simply";

  try {
    // Check if the channel already exists
    const channelListResponse = await web.conversations.list({
      exclude_archived: true,
      types: "public_channel,private_channel",
    });

    const existingChannel = channelListResponse.channels.find(
      (channel) => channel.name === channelName
    );

    if (existingChannel) {
      console.log(`Channel ${channelName} already exists with ID: ${existingChannel.id}`);
      return existingChannel.id;

    } else {
      const createChannelResponse = await web.conversations.create({
        name: channelName,
        is_private: false,
      });

      console.log(`Channel ${channelName} created with ID: ${channelId}`);
      return createChannelResponse.channel.id;

    }
  } catch (error) {
    console.error(error);
  }
}

async function inviteAppChannel(web, channelID) {
    try {
      const userList = await web.users.list();
      const users = userList.members;
  
      for (const user of users) {
        console.log(user);
        if (!user.is_bot && !user.deleted && !userList.has(user.id)) {
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
