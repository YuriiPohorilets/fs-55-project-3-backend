const { Pet } = require('../models');

const addPet = async ({ name, birthday, breed, comment }, _id) => {
  const newPet = await new Pet({ name, birthday, breed, comment, owner: _id });
  await newPet.save();

  return newPet;
};

const findPetByName = async name => {
  const pet = await Pet.find({ name });

  return pet.length === 0 ? null : pet;
};

const deletePetById = async petId => {
  const deletedPet = await Pet.findByIdAndRemove(petId);

  return deletedPet;
};

module.exports = {
  addPet,
  findPetByName,
  deletePetById,
};
