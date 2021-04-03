const mongoose = require('mongoose');

const ChapterSchema = mongoose.Schema({
  no: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  novelId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  content: {
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
  meta: {
    views: {
      type: Number,
    },
    likes: {
      type: Number,
    },
  },
});

module.exports = Chapter = mongoose.model('Chapter', ChapterSchema);
