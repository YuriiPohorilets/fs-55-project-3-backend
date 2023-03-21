const asyncHandler = require('express-async-handler');

const getUserPets = asyncHandler(async (req, res) => {
  res.json({
    status: 'success',
    code: 200,
    result: '',
  });
});

module.exports = getUserPets;
