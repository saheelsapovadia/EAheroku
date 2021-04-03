// routes/index.js
const router = require('express').Router();

const path = require('path');
//Routes
const users = require('./user');
const novel = require('./novel');
const auth = require('./auth');
const profile = require('./profile');

// API routes
router.use('/api/users', users);
router.use('/api/novels', novel);
router.use('/api/profile', profile);
router.use('/api/auth', auth);

router.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
// If no API routes are hit, send the React router
// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

module.exports = router;
