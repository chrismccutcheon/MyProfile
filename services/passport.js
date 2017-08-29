const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSerect: keys.googleClientSecret,
  callbackURL: 'auth/google/callback'
}, (accessToken)=>{
  console.log(accessToken);
}));
