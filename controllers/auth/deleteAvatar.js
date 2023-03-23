const asyncHandler = require('express-async-handler');
const { deleteImage, updateUserById } = require('../../services/authService');

const deleteAvatar = asyncHandler(async (req, res) => {
  const { imgId, _id } = req.user;

  if (!imgId) {
    return res.status(400).json({ message: 'Image is missing' });
  }

  const { result } = await deleteImage(imgId);

  if (result !== 'ok') {
    return res.status(409).json({ message: 'Failed to delete image' });
  }

  const updatedUser = await updateUserById(_id, { avatarURL: '', imgId: null });

  res.json({
    status: result,
    code: 200,
    result: updatedUser,
  });
});

module.exports = deleteAvatar;
