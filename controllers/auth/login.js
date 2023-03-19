const bcrypt = require('bcrypt');
const { joiLoginSchema } = require('../../schemas');
const asyncHandler = require('express-async-handler');
const { findUserByEmail, loginUser } = require('../../services/authService');
const { generateToken } = require('../../helpers/generateToken');

const login = asyncHandler (async (req, res) => {
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
  
  const token = await generateToken(user);
  await loginUser(user._id, token);

  res.json({
    status: 'success',
    code: 200,
    token: token,
    user: { email: user.email, name: user.name },
  });
});

module.exports = login;
