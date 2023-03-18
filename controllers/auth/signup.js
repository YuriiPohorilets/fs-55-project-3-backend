const bcrypt = require('bcrypt');
const { joiSignupSchema } = require('../../schemas');
const asyncHandler = require('express-async-handler');
const { registerNewUser, findUserByEmail } = require('../../services/authService');

const signup = asyncHandler(async (req, res) => {
  const { error } = joiSignupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { email, password, name } = req.body;
  const user = await findUserByEmail({ email });

  if (user) {
    return res.status(409).json({ message: `User with ${email} already exist ` });
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await registerNewUser({ name, email, password: hashPassword });

  res.status(201).json({
    status: 'success',
    code: 201,
    user: { name: result.name, email: result.email},
  });
});

module.exports =  signup;
