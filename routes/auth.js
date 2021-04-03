const express = require('express');
const passport = require('passport');
const { ensureAuth, checkToken } = require('../middleware/auth');
const router = express.Router();

// @desc   Auth with Google
// @route  Get /auth/login
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// @desc   google auth callback
// @route  Get /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }),
  (req, res) => {
    //let redirectTo = req.session.redirectTo || '/';
    // delete the session cookie so it is not present on the next request
    delete req.session.redirectTo;
    // redirecting the user to where they want to go
    res.json({ user: req.user });
  }
);

router.get('/logout', function (req, res) {
  res.redirect('http://localhost:3000/');
});

router.get('/ensureAuth', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user, message: 'Logged In' });
  } else {
    res.json({ message: 'Not Logged In' });
  }
});
router.post('/checkToken', checkToken);

module.exports = router;
