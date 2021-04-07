const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../config/key');
const passport = require('passport');
const mongoose = require('mongoose');
const { ensureAuth, ensureAdmin } = require('../middleware/auth');

const chapterRoutes = require('../routes/chapter');

// Load User model
const Novel = require('../models/Novel');
const Chapter = require('../models/Chapter');
// @route   GET api/novels/test
// @desc    Tests novels route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Novels Works' }));

// @route   GET novels/
// @desc    returns all novels
// @access  Public
router.get('/', (req, res) => {
  Novel.find()
    .sort({ date: -1 })
    .then((novels) => {
      if (!novels) {
        res.status(404).json({ nopostsfound: 'No Novels found' });
      }
      res.json(novels);
    })
    .catch((err) => res.status(404).json({ nopostsfound: 'No Novels found' }));
});

// @route   GET novels/:id
// @desc    Get novel by id
// @access  Public
router.get(
  '/:id',
  /*ensureAuth, ensureAdmin,*/ (req, res) => {
    Novel.findById(req.params.id)
      .populate('Chapters', ['no', 'title'])
      .then((novel) => {
        if (novel) res.json(novel);
        else res.json({ msg: 'no novel found' });
      })
      .catch((err) => {
        if (err.kind === 'ObjectId') {
          res.status(404).json({ nonovelfound: 'No novel found with that ID' });
        }
      });
  }
);

// @route   POST /novels
// @desc    Create novel
// @access  Private
router.post(
  '/',
  ensureAuth,
  ensureAdmin,

  (req, res) => {
    //const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    /*if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }*/

    const newNovel = new Novel({
      title: req.body.title,
      author: req.body.author,
      synopsis: req.body.synopsis,
      image: req.body.image,
    });

    newNovel.save().then((novel) => res.json(novel));
  }
);

// @route   POST /novels/:novelId/addchapter
// @desc    Create chapter
// @access  Private
router.post(
  '/:novelId/addchapter',
  ensureAuth,
  ensureAdmin,
  chapterRoutes.addChapter
);

// @route   GET novels/:novelId/:chapterId
// @desc    Get chapter by id from novel by id
// @access  Public
router.get('/:novelId/:chapterId', chapterRoutes.showChapter);

module.exports = router;
