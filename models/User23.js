// save novel ids , chapter ids of bookmarked novels
// save novel ids , chapter ids of currently reading novels
// save novel ids of liked novels
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    default: 'basic',
  },
  bookmarked: [
    {
      novelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Novel',
      },
      novelName: {
        type: String,
      },
    },
  ],
  continueReading: [
    {
      novel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Novel',
      },
      chapter: {
        type: Number,
      },
    },
  ],
  liked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Novel',
    },
  ],
});

module.exports = User = mongoose.model('users', UserSchema);
