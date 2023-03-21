const jwt = require('jsonwebtoken');
// require('dotenv').config();
SECRET_KEY='KLJLKDFVDF98jkfgdgg8d78D';
const { findUserById } = require('../../services/authService');

const refreshToken = async (req, res, next) => {
  const authHeader = req.header('authorization');

  try {
    if (!authHeader) {
      return res.status(401).json({ message: `"Not authorized"` });
    }

    const [tokenType, token] = authHeader.split(' ');

    if (!tokenType || tokenType !== 'Bearer') {
      return res.status(401).json({ message: `"Not authorized token"` });
    }

    if (!token) {
      return res.status(401).json({ message: `"token-invalid"` });
     
    }

    const { _id } = jwt.verify(token, SECRET_KEY);
    const user = await findUserById(_id);

    if (!user) {
      return res.status(401).json({ message: `"user-invalid"` });
    }
    if (!user.token.includes(token)) {
      return res.status(401).json({ message: `"user-token-invalid"` });
    }

    req.user = user;
    req.currentToken = token;
  } catch (error) {
    return res.status(401).json({
      code: error.message,
    });
  }

  next();
};

module.exports = refreshToken;