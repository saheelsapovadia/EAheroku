const { OAuth2Client } = require('google-auth-library');
const key = require('../config/key');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { response } = require('express');
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
    const client = new OAuth2Client(key.GOOGLE_CLIENT_ID);
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: req.body.body,
        audience: key.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      //console.log('payload', payload);
      const userid = payload['sub'];

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
            { expiresIn: '1h' }
          );
          res.status(200).json({ user });
        } else {
          user = await User.create(newUser);
          const token = jwt.sign(
            { email: user.email, id: user.googleId },
            key.jwtSecret,
            { expiresIn: '1h' }
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
    const token = req.header('x-auth-token');
    //const token = req.headers.Authorization;
    console.log('header', req.header('x-auth-token'));
    const client = new OAuth2Client(key.GOOGLE_CLIENT_ID);
    async function verify() {
      await client
        .verifyIdToken({
          idToken: token,
          audience: key.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
          // Or, if multiple clients access the backend:
          //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
        .then((response) => {
          if (response) {
            req.user = response.getUserId();
            console.log(req.user);
            next();
          } else {
            return res.status(401).json({
              error: 'wrongToken',
              msg: 'Invalid Token, Authorization Failed',
            });
          }
        });
    }
    verify().catch((err) => console.log(err));
  },
  ensureAdmin: async (req, res, next) => {
    if (req.user) {
      try {
        let user = await User.findOne({ googleId: req.user });
        let role = user.role;
        if (role === 'admin') {
          next();
        } else {
          return res.json({
            error: 'notAdmin',
            message: 'Oops Admin Arena..!',
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return res.json({
        error: 'noUser',
        message: 'Not Signed In!',
      });
    }
  },
};
//add ensureAdmin passport code copy from ensureAuth try catch
