const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../config/key');
const passport = require('passport');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const features = require('./feature');

// Load User model
const User = require('../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  private
router.get('/test', ensureAuth, (req, res) => res.json({ msg: 'Users Works' }));

// @route   GET api/users/test1
// @desc    Tests users route
// @access  Public
router.get('/test1', (req, res) => res.json({ msg: 'log in done' }));

// @route   GET api/users/test2
// @desc    Tests users route
// @access  Public
router.get('/test2', (req, res) => res.json({ msg: 'tests  2' }));

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST /users/:userid/addbookmark
// @desc    adds bookmark to the list for particular user
// @access  Public
router.post('/:userid/addbookmark', features.addBookmark);

// @route   GET /users/:userid/bookmarklist
// @desc    gets bookmarked list for particular user
// @access  Public
router.get('/:userid/bookmarklist', features.getBookmarks);

// @route   POST /users/:userid/removebookmark
// @desc    removes bookmark from the list for particular user
// @access  Public
router.post('/:userid/removebookmark', features.removeBookmark);

router.get('/:userid/:novelId/check', features.checkBookmark);

module.exports = router;
