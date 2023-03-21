const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');


SECRET_KEY='KLJLKDFVDF98jkfgdgg8d78D';
REFRESH_SECRET_KEY='JBNBhgy87878jjJKHDFCSD';

const findUserByEmail = async ({ email }) => {
  const user = await User.findOne({ email });
  return user;
};

const registerNewUser = async ({ email, password, name }) => {
  return await User.create({ name, email, password });
};

const loginUser = async (_id, token) => {
  await User.findByIdAndUpdate(_id, { token });
};

const logoutUser = async _id => {
  await User.findByIdAndUpdate(_id, { token: null });
};

const findUserById = async _id => {
  const user = await User.findById(_id);
  return user;
};

// const generateTokens = async (_id) => {
//   const payload = { id: _id };
//   const token = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: "12h" });
//   const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
//     expiresIn: "30d",
//   });
//   return { token, refreshToken };
// };



module.exports = {
  findUserByEmail,
  registerNewUser,
  loginUser,
  logoutUser,
  findUserById,
  // generateTokens
};
