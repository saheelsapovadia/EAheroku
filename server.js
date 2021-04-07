const path = require('path');
const express = require('express');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

//Routes
const users = require('./routes/user');
const novel = require('./routes/novel');
const auth = require('./routes/auth');
const profile = require('./routes/profile');
const routes = require('./routes/index');
//MongoDB setup
// DB Config
//const db = require('./config/key').mongoURI;
const db = process.env.MONGODB_URI || require('./config/key').mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

//sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
//initialise passport
//require('./config/passport')(passport);
//app.use(passport.initialize());
//app.use(passport.session());

//parse the body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Use Routes
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With,X-Auth-Token, Content-Type, Accept'
  );
  next();
});
app.use('/api/users', users);
app.use('/api/novels', novel);
app.use('/api/profile', profile);
app.use('/api/auth', auth);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// app.use(express.static(path.join(__dirname, 'client', 'build')));

// app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
