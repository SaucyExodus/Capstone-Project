export async function createApp(web) {
  const channelID = await createAppChannel(web);
  inviteAppChannel(web, channelID);
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
      console.log(
        `Channel ${channelName} already exists with ID: ${existingChannel.id}`
      );
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
    // Fetch current members of the channel
    const channelMembersResponse = await web.conversations.members({ channel: channelID });
    const channelMembers = new Set(channelMembersResponse.members);

    // Fetch all users
    const userList = await web.users.list();
    const users = userList.members;

    for (const user of users) {
      // Check if the user is a bot, deleted, or already a member
      if (!user.is_bot && !user.deleted && user.id !== 'USLACKBOT') {
        if (!channelMembers.has(user.id)) {
          // Invite users who are not already in the channel
          await web.conversations.invite({
            channel: channelID,
            users: user.id,
          });
          console.log(`Invited user ${user.id} to channel ${channelID}`);
        } else {
          console.log(`User ${user.id} is already a member of channel ${channelID}`);
        }
      }
    }
  } catch (error) {
    console.error("Error in inviteAppChannel:", error);
  }
}

