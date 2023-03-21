const asyncHandler = require('express-async-handler');
const { addDeleteToFavorite } = require('../../services/noticesService');

const favoriteNotices = asyncHandler(async (req, res) => {
  const favoriteArr = await addDeleteToFavorite(req);

  if (!favoriteArr) {
    res.status(400).json({
      code: 400,
      status: 'bad request',
    });
  }

  res.status(200).json({
    code: 200,
    status: 'success',
    result: favoriteArr,
  });
});

module.exports = favoriteNotices;
