const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const views = require('./routes/getViews');
const resume = require('./routes/resume');

const app = express();


passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSercet: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken)=>{
  console.log(accessToken);
}));


app.get('/auth/google/callback', passport.authenticate('google'))

app.get('/auth/google', passport.authenticate('google',{
  scope: ['profile', 'email']
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));


app.use('/views', views);
app.use('/resume', resume);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
