const asyncHandler = require('express-async-handler');
const { removeUserNotice } = require('../../services/noticesService');

const removeNotice = asyncHandler(async (req, res) => {
  const isDeleted = await removeUserNotice(req);

  if (!isDeleted) {
    res.status(400).json({
      code: 400,
      status: 'bad request',
    });
  }

  res.status(204).json({
    code: 204,
    status: 'success',
  });
});

module.exports = removeNotice;
