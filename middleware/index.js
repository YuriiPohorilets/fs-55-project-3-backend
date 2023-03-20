const { auth } = require('../middleware/auth');
const upload = require('../middleware/upload');

module.exports = {
  auth,
  upload,
};
