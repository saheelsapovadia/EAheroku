const { OAuth2Client } = require('google-auth-library');
const key = require('../config/key');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
module.exports = {
  auth: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, key.jwtSecret);
      req.userId = decodedToken?.id;

      next();
    } catch (error) {}
  },

  checkToken: (req, res, next) => {
    //console.log('checking begins...', req.body.body);

    const client = new OAuth2Client(key.GOOGLE_CLIENT_ID);
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: req.body.body,
        audience: key.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      console.log('payload', payload);
      const userid = payload['sub'];
      // If request specified a G Suite domain:
      // const domain = payload['hd'];

      //check for user and create if not
      const newUser = new User({
        googleId: payload.sub,
        displayName: payload.name,
        image: payload.picture,
        email: payload.email,
      });

      try {
        let user = await User.findOne({ googleId: payload.sub });

        if (user) {
          const token = jwt.sign(
            { email: user.email, id: user.googleId },
            key.jwtSecret,
            { expiresIn: '2h' }
          );
          res.status(200).json({ user });
        } else {
          user = await User.create(newUser);
          const token = jwt.sign(
            { email: user.email, id: user.googleId },
            key.jwtSecret,
            { expiresIn: '2h' }
          );
          res.status(200).json({ user });
        }
      } catch (err) {
        console.log(err);
      }
    }
    verify().catch(console.error);
  },

  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      req.session.redirectTo = req.baseUrl + req.url;
      res.redirect('/auth/login');
    }
  },
  ensureAdmin: async (req, res, next) => {
    try {
      let user = await User.findOne({ _id: req.session.passport.user });
      let role = user.role;
      if (role === 'admin') {
        next();
      } else {
        return res.json({ message: 'No Access' });
      }
    } catch (err) {
      console.log(err);
    }
  },
};
//add ensureAdmin passport code copy from ensureAuth try catch
