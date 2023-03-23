const jwt = require('jsonwebtoken');
const path = require('path');

const configPath = path.join(__dirname, '..', '.env');
require('dotenv').config({
  path: configPath,
});

const generateToken = async _id => {
  const payload = { id: _id };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '12h' });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
    expiresIn: '30d',
  });
  return { token, refreshToken };
};

module.exports = { generateToken };
