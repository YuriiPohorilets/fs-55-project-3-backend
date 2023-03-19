const jwt = require('jsonwebtoken');
const { User } = require('../models');
// const { SECRET_KEY } = process.env;
const SECRET_KEY="KLJLKDFVDF98jkfgdgg8d78D";

const authVerifyToken = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  //  разделили bearer and token
  const [bearer, token] = authorization.split(' ');

  try {
    // Проверяем есть ли вообще bearer
    if (bearer !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    //  проверяем валидацию токена по id
    const { id } = jwt.verify(token, SECRET_KEY);
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

module.exports =  {authVerifyToken} ;
