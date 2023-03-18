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

module.exports = {
  findUserByEmail,
  registerNewUser,
  loginUser,
};
