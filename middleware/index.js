const { auth } = require('../middleware/auth');
const upload = require('../middleware/upload');
const  passport  = require('../middleware/passport');



module.exports = {
  auth, passport,
  upload,
};
