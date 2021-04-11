const mongoose = require('mongoose');
const chapter = require('./Chapter');

const NovelSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String, //mongoose.Schema.Types.ObjectId, // author object,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  comments: [
    {
      body: String,
      date: Date,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  access: {
    // true for public || false for private
    type: Boolean,
    default: false,
  },
  noOfChapters: {
    type: Number,
  },
  Chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chapter',
    },
  ],
  lastChapter: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  genre: [String],
  meta: {
    views: {
      type: Number,
    },
    likes: {
      type: Number,
    },
  },
});

module.exports = Novel = mongoose.model('Novel', NovelSchema);
