export async function appHomeOpenedUI() {
    const view = {
        type: 'home',
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: 'Welcome to your Home tab!'
            }
          },
          {
            type: 'divider'
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: 'Here you can add various interactive elements.'
            }
          }
        ]
    };
    return view;
}