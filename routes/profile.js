const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../config/key');
const passport = require('passport');
const { ensureAuth, ensureGuest } = require('../middleware/auth');
//check if authorised
const auth = require('../middleware/auth2');
const features = require('./feature');

// Load User model
const User = require('../models/User');

router.get('/:userid', (req, res, next) => {
  User.findById(req.params.userid)
    .then((user) => res.json(user))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ noBookmark: 'No User found' });
      }
    });
});

module.exports = router;
