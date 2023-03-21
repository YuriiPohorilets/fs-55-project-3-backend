// const Strategy = require('passport-google-oauth2');
// const passport = require('passport');
// const { nanoid } = require('nanoid');
// const bcrypt = require('bcrypt');
// const {User} = require('../models/user');

// // const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
// const GOOGLE_CLIENT_ID='2558446105-r29719cf5sfll1r3s0uqe08a3ds5eve8.apps.googleusercontent.com';
// const GOOGLE_CLIENT_SECRET='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';

// const googleParams = {
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: `http://localhost:3000/api/auth/google/callback`,
//   // https://tiny-hare-cowboy-hat.cyclic.app/
//   passReqCallback: true,
// };

// const googleCallback = async (req, accessToken, refreshToken, profile, done) => {
//   const { email, name} = profile;
//   const user = await User.findOne({ email });

//   if (user) {
//     done(null, user);
//   }

//   const password = nanoid();
//   const hashPassword = await bcrypt.hash(password, 10);
//   const newUser = await User.create({
//     email,
//     name: name,
//     password: hashPassword,
//   });
//   // await newUser.save();
//   done(null, newUser);
// };

// const googleStrategy = new Strategy(googleParams, googleCallback);

// passport.use("google", googleStrategy);

// module.exports = passport;

