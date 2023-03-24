const { User } = require('../../models');
const asyncHandler = require('express-async-handler');

const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { name, email, birthday, phone, city } = req.body;
  const avatarURL = req.file ? req.file.path : req.user.avatarURL;
  const imgId = req.file ? req.file.filename : req.user.imgId;

  const updateInfo = await User.findOneAndUpdate(
    _id,
    {
      name,
      email,
      birthday,
      phone,
      city,
      avatarURL,
      imgId,
    },
    {
      new: true,
    }
  );
  res.json({
    status: 'success',
    code: 200,
    result: {
      name: updateInfo.name,
      email: updateInfo.email,
      phone: updateInfo.phone,
      city: updateInfo.city,
      birthday: updateInfo.birthday,
      avatarURL: updateInfo.avatarURL,
      favorite: updateInfo.favorite,
      imgId: updateInfo.imgId,
    },
  });
});

module.exports = updateUser;
