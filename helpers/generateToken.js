const jwt = require('jsonwebtoken');
const SECRET_KEY="KLJLKDFVDF98jkfgdgg8d78D";

const generateToken = ({ _id }) => {
  // const { SECRET_KEY } = process.env;
  const payload = {
    id: _id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '12h' });
  return token;
};

module.exports = {generateToken };
