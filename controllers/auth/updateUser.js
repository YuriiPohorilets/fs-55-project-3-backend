const { User } = require('../../models');

const updateUser = async (req, res) => {
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
    user: {
      name: updateInfo.name,
      email: updateInfo.email,
      birthday: updateInfo.birthday,
      phone: updateInfo.phone,
      city: updateInfo.city,
    },
  });
};

module.exports = updateUser;
