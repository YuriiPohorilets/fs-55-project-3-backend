const asyncHandler = require('express-async-handler');
const { Pet } = require('../../models')

const getUserPets = asyncHandler(async (req, res) => {
  const { _id, name, email, phone, city, birthday, avatarURL, favorite, } = req.user
  const pets = await Pet.find({owner: _id})

  res.json({
    status: 'success',
    code: 200,
    result: {
      _id,
      email,
      name,
      phone,
      city,
      birthday,
      avatarURL,
      favorite,
      pets
    },
  });
});

module.exports = getUserPets;
