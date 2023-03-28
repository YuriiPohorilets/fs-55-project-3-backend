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
  const photo = req.file ? req.file.path : '';
  const newPet = await addPet({ name, birthday, breed, comment, photo }, _id);

  res.json({
    status: 'success',
    code: 201,
    result: newPet,
  });
});

module.exports = cratePet;
