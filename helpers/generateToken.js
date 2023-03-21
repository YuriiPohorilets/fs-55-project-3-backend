const jwt = require('jsonwebtoken');
const { SECRET_KEY, REFRESH_SECRET_KEY } = process.env;
// const SECRET_KEY="KLJLKDFVDF98jkfgdgg8d78D";

const generateToken = ({ _id }) => {

  const payload = {
    id: _id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '12h' });
  // return token;
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: "30d",
  });
  return { token, refreshToken };
};

module.exports = {generateToken };
