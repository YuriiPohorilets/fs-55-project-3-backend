const asyncHandler = require('express-async-handler');
const { getAll } = require('../../services/noticesService');

const getByCategory = asyncHandler(async (req, res) => {
  const notices = await getAll(req);

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
