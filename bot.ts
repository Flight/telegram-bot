import { Telegram } from "telegraf";

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const adminChatId = process.env.ADMIN_CHAT_ID;

if (!botToken || !chatId || !adminChatId) {
  console.error("Please provide the BOT_TOKEN, CHAT_ID, ADMIN_CHAT_ID!");
} else {
  const telegram: Telegram = new Telegram(process.env.BOT_TOKEN as string);
  telegram.sendMessage(adminChatId, "The bot is connected!");
}
