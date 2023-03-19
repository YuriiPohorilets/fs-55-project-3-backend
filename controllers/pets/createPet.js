const asyncHandler = require('express-async-handler');
const { addPet } = require('../../services/petsService');
const { joiPetSchema } = require('../../schemas/');

const cratePet = asyncHandler(async (req, res) => {
  const { error } = joiPetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  // const { _id } = req.user;
  const pet = req.body;

  const newPet = await addPet(pet);

  res.status(200).json(newPet);
});

module.exports = cratePet;
