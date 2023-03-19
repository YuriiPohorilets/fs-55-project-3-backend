const { User } = require('../../models');
const asyncHandler = require('express-async-handler');



const updateUser = asyncHandler(async (req, res) => {
  
  const { _id } = req.user;

  const { name, email, birthday, phone, city } = req.body;

  const updateInfo = await User.findOneAndUpdate(
    _id,
    {
      name,
      email,
      birthday,
      phone,
      city,
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
    },
  });
});

module.exports = updateUser;
