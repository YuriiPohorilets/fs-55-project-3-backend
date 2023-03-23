const bcrypt = require('bcrypt');
const { joiLoginSchema } = require('../../schemas');
const { User } = require('../../models');
const asyncHandler = require('express-async-handler');
const { findUserByEmail } = require('../../services/authService');
const { generateToken } = require('../../helpers');

const login = asyncHandler(async (req, res) => {
  const { error } = joiLoginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const { email, password } = req.body;
  const user = await findUserByEmail({ email });

  if (!user) {
    return res.status(409).json({ message: 'User with this email not found' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: `Email or password is wrong` });
  }


  
  const { token, refreshToken } = await generateToken(user._id);
  await User.findByIdAndUpdate(user._id, { token, refreshToken });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  res.json({
    status: 'success',
    code: 200,
    token,
    refreshToken,
    result: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.city,
      birthday: user.birthday,
      avatarURL: user.avatarURL,
      favorite: user.favorite,
    },
  });
});

module.exports = login;
