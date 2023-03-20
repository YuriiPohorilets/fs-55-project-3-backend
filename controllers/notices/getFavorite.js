const asyncHandler = require('express-async-handler');
const { getFavoriteNotices } = require('../../services/noticesService');

const getFavorite = asyncHandler(async (req, res) => {
  const notices = await getFavoriteNotices(req);

  if (!notices) {
    res.status(400).json({
      code: 400,
      status: 'bad request',
    });
  }

  res.status(200).json({
    code: 200,
    status: 'success',
    result: notices,
  });
});

module.exports = getFavorite;
