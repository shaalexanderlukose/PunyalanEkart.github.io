// backend/models/contentModel.js

const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  text: String,
  chatId: Number,
  userId: Number,
  username: String,
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
