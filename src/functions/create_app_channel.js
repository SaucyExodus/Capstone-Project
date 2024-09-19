export async function createAppChannel(web) {
  const channelName = "task-simply";

  try {
    await web.conversations.create({
      name: channelName,
      is_private: false,
    });
  } catch (error) {
    console.error(error);
  }
}
