const jwt = require('jsonwebtoken');
// require('dotenv').config();
// const { SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const SECRET_KEY = 'KLJLKDFVDF98jkfgdgg8d78D';
const REFRESH_SECRET_KEY = 'JBNBhgy87878jjJKHDFCSD';

const generateToken = async _id => {
  const payload = { id: _id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '12h' });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: '30d',
  });
  return { token, refreshToken };
};

module.exports = { generateToken };
