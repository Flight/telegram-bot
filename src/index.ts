import { Telegram } from "telegraf";
import * as functions from "firebase-functions";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { config } from "yamlenv";

config();

const startBot = functions.https.onCall(async () => {
  const botToken = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;
  const adminChatId = process.env.ADMIN_CHAT_ID;

  functions.logger.info("Hello logs!", { structuredData: true });

  if (!botToken || !chatId || !adminChatId) {
    functions.logger.error(
      "Please provide the BOT_TOKEN, CHAT_ID, ADMIN_CHAT_ID!"
    );
    return "Please provide the BOT_TOKEN, CHAT_ID, ADMIN_CHAT_ID!";
  }

  const bot: Telegram = new Telegram(process.env.BOT_TOKEN as string);
  functions.logger.info("The bot is connected!");
  bot.sendMessage(adminChatId, "The bot is connected!");
  const updates = await bot.getUpdates(1000, 10, 0, undefined);
  functions.logger.info(updates);
  return updates;
});

export { startBot };
