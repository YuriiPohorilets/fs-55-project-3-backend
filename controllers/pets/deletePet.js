const asyncHandler = require('express-async-handler');

const deletePet = asyncHandler(async (req, res) => {
  res.status(200).json(news);
});

module.exports = deletePet;
