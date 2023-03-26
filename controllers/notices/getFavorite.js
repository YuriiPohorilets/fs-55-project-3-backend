const asyncHandler = require('express-async-handler');
const { getFavoriteNotices } = require('../../services/noticesService');

const getFavorite = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { query = '', page = 1, limit = 10 } = req.query;
  const {result, resultLength} = await getFavoriteNotices(_id, query, page, limit);

  if (!result) {
    res.status(400).json({
      code: 400,
      status: 'bad request',
    });
  }

  res.status(200).json({
    code: 200,
    status: 'success',
    total: resultLength,
    result: result,
  });
});

module.exports = getFavorite;
