const asyncHandler = require('express-async-handler');
const { logoutUser } = require('../../services/authService');

const logout = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  await logoutUser(_id);
  res.status(204).json();

  // res.status(201).json({
  //   status: 'success',
  //   code: 204,
  //   message: 'User success logout',
  // });
});

module.exports = logout;
