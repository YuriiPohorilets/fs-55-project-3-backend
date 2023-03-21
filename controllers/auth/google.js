// const googleAuth = async (req, res) => {
//   const stringifiedParams = queryString.stringify({
//     client_id: process.env.GOOGLE_CLIENT_ID,
//     redirect_uri: `${process.env.DB_URL}/auth/google-redirect`,
//     scope: [
//       "https://www.googleapis.com/auth/userinfo.email",
//       "https://www.googleapis.com/auth/userinfo.profile",
//     ].join(" "),
//     response_type: "code",
//     access_type: "offline",
//     prompt: "consent",
//   });
//   return res.redirect(
//     `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`
//   );
// };



// const googleRedirect = async (req, res) => {
//   const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
//   const urlObj = new URL(fullUrl);
//   const urlParams = queryString.parse(urlObj.search);
//   const code = urlParams.code;
//   const tokenData = await axios({
//     url: `https://oauth2.googleapis.com/token`,
//     method: "post",
//     data: {
//       client_id: process.env.GOOGLE_CLIENT_ID,
//       client_secret: process.env.GOOGLE_CLIENT_SECRET,
//       redirect_uri: `${process.env.DB_URL}/auth/google-redirect`,
//       grant_type: "authorization_code",
//       code,
//     },
//   });
//   const userData = await axios({
//     url: "https://www.googleapis.com/oauth2/v2/userinfo",
//     method: "get",
//     headers: {
//       Authorization: `Bearer ${tokenData.data.access_token}`,
//     },
//   });
//   let existingParent = await UserModel.findOne({ email: userData.data.email });
//   if (!existingParent || !existingParent.originUrl) {
//     return res.status(403).send({
//       message:
//         "You should register from front-end first. Google are only for sign-in",
//     });
//   }
//   const newSession = await SessionModel.create({
//     uid: existingParent._id,
//   });
//   const accessToken = jwt.sign(
//     { uid: existingParent._id, sid: newSession._id },
//     process.env.JWT_ACCESS_SECRET as string,
//     {
//       expiresIn: process.env.JWT_ACCESS_EXPIRE_TIME,
//     }
//   );
//   const refreshToken = jwt.sign(
//     { uid: existingParent._id, sid: newSession._id },
//     process.env.JWT_REFRESH_SECRET as string,
//     {
//       expiresIn: process.env.JWT_REFRESH_EXPIRE_TIME,
//     }
//   );
//   return res.redirect(
//     `${existingParent.originUrl}?accessToken=${accessToken}&refreshToken=${refreshToken}&sid=${newSession._id}`
//   );
// };




// const { joiSignupSchema } = require('../../schemas');
// const asyncHandler = require('express-async-handler');

// const googleAuth = asyncHandler(async (req, res) => {

//   res.json({
//     status: 'success',
//     code: 200,
//     token: token,
//     result: {
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//       city: user.city,
//       birthday: user.birthday,
//       avatarURL: user.avatarURL,
//       favorite: user.favorite,
//     },
//   });
// });

// const googleRedirect = asyncHandler(async (req, res) => {

//   res.json({
//     status: 'success',
//     code: 200,
//     token: token,
//     result: {
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//       city: user.city,
//       birthday: user.birthday,
//       avatarURL: user.avatarURL,
//       favorite: user.favorite,
//     },
//   });
// });

// module.exports = {googleAuth, googleRedirect};

const { generateTokens } = require("../../helpers");

const User = require("../../models/user");

const google = async (req, res) => {
  const { _id } = req.user;

  const { token, refreshToken } = await generateTokens(_id);
  await User.findByIdAndUpdate(_id, { token, refreshToken });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  res.redirect(`https://name.app/login?token=${token}`);
  
};
// https://kirill-filonchuk.github.io/pet_team02/


module.exports = google;