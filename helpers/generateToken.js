const jwt = require('jsonwebtoken');
// require('dotenv').config();
// const { SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

SECRET_KEY='KLJLKDFVDF98jkfgdgg8d78D';
REFRESH_SECRET_KEY='JBNBhgy87878jjJKHDFCSD';

const generateToken = ({ _id }) => {

  const payload = {
    id: _id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '12h' });
  return token;
 
};

const refreshToken = ({ _id }) => {
  const payload = {
    id: _id,
  };
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: "30d",
    });
  return  refreshToken;
};

module.exports = { generateToken, refreshToken };



// const verifyRefreshToken = (req, res, next) => {
//   try {
//     const refreshToken = req.cookies.refreshToken;

//     if (!refreshToken) {
//       return res.status(401).json({ message: `"Not authorized"` });
//     }
//     const user = jwt.verify(refreshToken, SECRET_KEY_REFRESH);
//     req.user = user;

//     next();
//   } catch (error) {
//     next(error);
//   }
// };


