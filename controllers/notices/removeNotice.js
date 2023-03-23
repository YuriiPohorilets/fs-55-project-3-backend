const asyncHandler = require('express-async-handler');
const { removeUserNotice } = require('../../services/noticesService');

const removeNotice = asyncHandler(async (req, res) => {

  const { _id } = req.user;
  const { noticeId } = req.params;
  const isDeleted = await removeUserNotice(_id, noticeId);

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
