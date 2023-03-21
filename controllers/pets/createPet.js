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
  const { path: photo } = req.file;

  // const pet = await findPetByName(name);

  // if (pet.owner === _id) {
  //   return res.status(409).json({ message: `Pet with name: ${name} already exist ` });
  // }

  const newPet = await addPet({ name, birthday, breed, comment, photo }, _id);

  res.json({
    status: 'success',
    code: 201,
    result: newPet,
  });
});

module.exports = cratePet;
