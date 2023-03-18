const bcrypt = require('bcrypt');
const { joiSignupSchema } = require('../../schemas/index');
const asyncHandler = require('express-async-handler');
const User = require('../../models/index');

const signup = asyncHandler(async (req, res) => {
  const { error } = joiSignupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const { email, password, name } = req.body;
  const user = await User.findOne({ email });

  // const findUserByEmail = async ({ email }) => {
  //   const user = await User.findOne({ email });
  //   return user;
  // };
  // const user = await findUserByEmail({ email });

  if (user) {
    return res.status(409).json({ message: `User with ${email} already exist ` });
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({ name, email, password: hashPassword });

  // const registerNewUser = async ({ email, password, name }) => {
  //   const newUser = await new User({ email, password, name });
  //   newUser.setPassword(password);
  //   newUser.save();
  //   return newUser;
  // };
  // const result = await registerNewUser({ email, password, name });

  res.status(201).json({
    status: 'success',
    code: 201,
    user: { name: result.name, email: result.email },
  });
});

module.exports = { signup };
