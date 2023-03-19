const bcrypt = require('bcrypt');

const { joiSignupSchema } = require('../../schemas');
const asyncHandler = require('express-async-handler');

const { registerNewUser, findUserByEmail } = require('../../services/authService');

const signup = asyncHandler(async (req, res) => {
  const { error } = joiSignupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { email, password } = req.body;
  const user = await findUserByEmail({ email });

  if (user) {
    return res.status(409).json({ message: `User with ${email} already exist ` });
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = await registerNewUser({
    ...req.body,
    password: hashPassword,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    result: {
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      city: newUser.city,
      birthday: newUser.birthday,
      avatarURL: newUser.avatarURL,
      favorite: newUser.favorite,
    },
  });
});

module.exports = signup;
