const asyncHandler = require('express-async-handler');
const { addDeleteToFavorite } = require('../../services/noticesService');

const favoriteNotices = asyncHandler(async (req, res) => {
  const { noticeId } = req.params;
  const { _id } = req.user;
  const favoriteArr = await addDeleteToFavorite(noticeId, _id);
  const resultLength = favoriteArr.length;

  if (!favoriteArr) {
    res.status(400).json({
      code: 400,
      status: 'bad request',
    });
  }

  res.status(200).json({
    code: 200,
    status: 'success',
    total: resultLength,
    result: favoriteArr,
  });
});

module.exports = favoriteNotices;
