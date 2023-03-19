const asyncHandler = require('express-async-handler');
const { addPet, findPetByName } = require('../../services/petsService');
const { joiPetSchema } = require('../../schemas/');

const cratePet = asyncHandler(async (req, res) => {
  const { error } = joiPetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { _id } = req.user;
  const { name, birthday, breed, comment } = req.body;

  const pet = await findPetByName(name);

  if (pet) {
    return res.status(409).json({ message: `Pet with ${name} already exist ` });
  }

  const newPet = await addPet({ name, birthday, breed, comment }, _id);

  res.status(201).json(newPet);
});

module.exports = cratePet;
