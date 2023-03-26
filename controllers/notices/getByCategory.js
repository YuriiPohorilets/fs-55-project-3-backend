const asyncHandler = require('express-async-handler');
const { getAllByCategory } = require('../../services/noticesService');

const getByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const { query = '', page = 1, limit = 10 } = req.query;
  const { resultNotices, resultLength } = await getAllByCategory(category, query, page, limit);

  if (!resultNotices) {
    res.status(400).json({
      code: 400,
      status: 'bad request',
    });
  }

  res.status(200).json({
    code: 200,
    status: 'success',
    total: resultLength,
    result: resultNotices,
  });
});

module.exports = getByCategory;
