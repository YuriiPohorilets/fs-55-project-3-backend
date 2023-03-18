const bcrypt = require("bcryptjs");
// const { SECRET_KEY } = process.env;
const { User}  = require("../../models/index");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
   const user = await User.findOne({ email });

    if (user) {
      res.status(409).json({ message: `User with ${email} already exist ` });
    return;
    }
    if (!email || !password || !name) {
      res.status(400).json({ message: 'Name, email or password not found' });
      return;
    }
const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const result = await User.create({name,  email, password: hashPassword });


    
    res.status(201).json({
      status: "success", 
      code: 201,
      user: { name: result.name, email: result.email},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;