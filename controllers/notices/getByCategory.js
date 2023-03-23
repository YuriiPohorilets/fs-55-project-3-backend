const asyncHandler = require('express-async-handler');
const { getAllByCategories } = require('../../services/noticesService');

const getByCategory = asyncHandler(async (req, res) => {
  const notices = await getAllByCategories(req);

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

module.exports = getByCategory;
