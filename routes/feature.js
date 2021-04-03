const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Novel = require('../models/novel');
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

exports.addBookmark = async (req, res, next) => {
  var novelName;
  await Novel.findById(req.body.novelId)
    .then((novel) => {
      //console.log(novel.title);
      novelName = novel.title;
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ noBookmark: 'No bookmark found' });
      }
    });

  //console.log('novelName', novelName);
  const bookmark = {
    novelId: req.body.novelId,
    novelName: novelName,
  };
  //console.log(bookmark);

  await User.findByIdAndUpdate(
    req.params.userid,
    { $push: { bookmarked: bookmark } },
    { safe: true, upsert: true, useFindAndModify: false }
  )
    .then((user) => {
      //console.log(user);
      //res.json(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ userNotFound: 'No User found with that ID' });
      }
    });
  function findBookmark(arr, value) {
    return arr.filter(function (ele) {
      return ele.novelId == value;
    });
  }
  User.findById(req.params.userid)
    .then((user) => {
      var newBookmark = findBookmark(user.bookmarked, req.body.novelId);
      //console.log(newBookmark[0]);
      res.json(newBookmark[0]);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ noBookmark: 'No bookmark found' });
      }
    });
};

exports.removeBookmark = (req, res, next) => {
  console.log('removing bookmark...');
  User.findByIdAndUpdate(
    req.params.userid,
    {
      $pull: {
        bookmarked: { novelId: req.body.novelId },
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
        (item) => item.novelId == req.params.novelId
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
