export async function createAppChannel(web) {
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
      const channelId = createChannelResponse.channel.id;
      console.log(`Channel ${channelName} created with ID: ${channelId}`);
      return channelId;
    }
  } catch (error) {
    console.error(error);
  }
}
