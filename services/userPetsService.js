const { Pet } = require('../models');

const findUserPets = async _id => {
  const pets = await Pet.find({ owner: _id });

  return pets;
};

module.exports = {
  findUserPets,
};
