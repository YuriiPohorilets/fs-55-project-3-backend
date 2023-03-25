const asyncHandler = require('express-async-handler');
const { getAllByCategory, getLengthNoticesByCategories } = require('../../services/noticesService');

const getByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const { page = 1, limit = 10 } = req.query;
  const notices = await getAllByCategory(category, page, limit);
  const resultLength = await getLengthNoticesByCategories(category);

  if (!notices) {
    res.status(400).json({
      code: 400,
      status: 'bad request',
    });
  }

  res.status(200).json({
    code: 200,
    status: 'success',
    total: resultLength,
    result: notices,
  });
});

module.exports = getByCategory;
