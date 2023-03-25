const asyncHandler = require('express-async-handler');
const { getFavoriteNotices } = require('../../services/noticesService');

const getFavorite = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const notices = await getFavoriteNotices(_id);
  const resultLength = notices.length;

  if (!notices) {
    res.status(400).json({
      code: 400,
      status: 'bad request',
    });
  }

  res.status(200).json({
    code: 200,
    status: 'success',
    resultLength,
    result: notices,
  });
});

module.exports = getFavorite;
