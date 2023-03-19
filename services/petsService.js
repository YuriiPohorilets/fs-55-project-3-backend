const { Pet } = require('../models');

const addPet = async ({ name, birthday, breed, comment }) => {
  const newPet = await new Pet({ name, birthday, breed, comment });
  await newPet.save();

  return newPet;
};

module.exports = {
  addPet,
};
