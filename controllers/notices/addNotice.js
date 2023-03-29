const asyncHandler = require('express-async-handler');
const { createNotice } = require('../../services/noticesService');
const { joiNoticeSchema } = require('../../schemas');

const addNotice = asyncHandler(async (req, res) => {
  const { error } = joiNoticeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      code: 400,
      status: 'bad request',
      message: error.message,
    });
  }

  const { _id, email, phone } = req.user;

  let petAvatarURL = '';
  if (req.file) {
    petAvatarURL = req.file.path;
  }

  const createdNotice = await createNotice(req.body, _id, email, phone, petAvatarURL);
  if (!createdNotice) {
    res.status(400).json({
      code: 400,
      status: 'bad request',
    });
  }
  res.status(201).json({
    code: 201,
    status: 'success',
    result: createdNotice,
  });
});

module.exports = addNotice;
