const { App } = require('@slack/bolt');
const db = require('./models/conversationModel');

require('dotenv').config();
// Initializes your app with your bot token and signing secret

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  // socketMode: true, // alternative socket mode
  // appToken: process.env.APP_TOKEN,
});

app.message(/^(delete|remove).*/, async ({ context, say }) => {
  try {
    const result = await client.chat.delete({
      channel: channelId,
      ts: messageId,
    });
  } catch (error) {
    console.log(error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();
