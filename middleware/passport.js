const { Strategy } = require('passport-googleAuth-oauth2');
const passport = require('passport');
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const googleParams = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/api/auth/google/callback`,
  // https://tiny-hare-cowboy-hat.cyclic.app/
  
  passReqCallback: true,
};

const googleCallback = async (req, accessToken, refreshToken, profile, done) => {
  const { email, name, picture, locate } = profile;

  const user = await User.findOne({ email });
  if (user) {
    done(null, user);
  }

  const password = nanoid();
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    name: name,
    password: hashPassword,
    avatarURL: picture,
    city: locate || 'kyiv, Ukraine',
    phone: '+3800000000000',
  });

  done(null, newUser);
};

const googleStrategy = new Strategy(googleParams, googleCallback);

passport.use('google', googleStrategy);

module.exports = passport;
