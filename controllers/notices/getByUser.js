const asyncHandler = require('express-async-handler');
const { getNoticesByUser } = require('../../services/noticesService');

const getByUser = asyncHandler(async (req, res) => {
  
  const { _id } = req.user;
  const notices = await getNoticesByUser(_id);

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

module.exports = getByUser;
