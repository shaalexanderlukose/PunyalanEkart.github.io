// backend/controllers/telegramController.js

const Content = require('../models/contentModel');

const handleMessage = async (message) => {
  try {
    const { text, chat, from } = message;
    const { id: chatId } = chat;
    const { id: userId, username } = from;

    const newContent = new Content({
      text: text,
      chatId: chatId,
      userId: userId,
      username: username,
    });

    await newContent.save();
    console.log('Message saved to MongoDB:', text);
  } catch (error) {
    console.error('Error handling Telegram message:', error);
  }
};

module.exports = {
  handleMessage,
};
