const jwt = require('jsonwebtoken');
const { User } = require('../models');
const path = require('path');

const configPath = path.join(__dirname, '..', '.env');
require('dotenv').config({
  path: configPath,
});

const auth = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  try {
    if (bearer !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === 'Invalid signature') {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = { auth };
