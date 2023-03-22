const { User } = require('../models');

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
  await User.findByIdAndUpdate(_id, { token: null, refreshToken: '' });
};

const findUserById = async _id => {
  const user = await User.findById(_id);
  return user;
};

module.exports = {
  findUserByEmail,
  registerNewUser,
  loginUser,
  logoutUser,
  findUserById,
};
