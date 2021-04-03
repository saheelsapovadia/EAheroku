const express = require('express');
const router = express.Router();

const User = require('../models/User');

// @route   GET /:userid/bookmarklist
// @desc    Get Bookmarked List
// @access  Public
exports.getBookmarks = (req, res, next) => {
  User.findById(req.params.userid)
    .then((user) => res.json(user.bookmarked))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ noBookmark: 'No bookmark found' });
      }
    });
};

// @route   POST /:userid/bookmarklist
// @desc    set Bookmarked
// @access  Public

exports.addBookmark = (req, res, next) => {
  const bookmark = {
    novel: req.body.novelId,
    chapter: req.body.chapterNo,
  };
  //console.log(bookmark);

  User.findByIdAndUpdate(
    req.params.userid,
    { $push: { bookmarked: bookmark } },
    { safe: true, upsert: true, useFindAndModify: false }
  )
    .then((user) => {
      //console.log(user);
      res.json(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ userNotFound: 'No User found with that ID' });
      }
    });
};

exports.removeBookmark = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.userid,
    {
      $pull: {
        bookmarked: { novel: req.body.novelId, chapter: req.body.chapterNo },
      },
    },
    { safe: true, upsert: true, useFindAndModify: false }
  )
    .then((user) => {
      //console.log(user);
      res.json(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ userNotFound: 'No User found with that ID' });
      }
    });
};

exports.checkBookmark = (req, res, next) => {
  User.findById(req.params.userid)
    .then((user) => {
      const result = user.bookmarked.find(
        (item) =>
          item.novel == req.params.novelId && item.chapter == req.params.no
      );
      if (result === undefined) res.json({ res: false });
      else res.json({ res: true });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ noBookmark: 'No bookmark found' });
      }
    });
};
