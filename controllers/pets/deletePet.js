const asyncHandler = require('express-async-handler');
const { deletePetById } = require('../../services/petsService');

const deletePet = asyncHandler(async (req, res) => {
  const { petId } = req.params;

  const deletedPet = await deletePetById(petId);

  !deletedPet
    ? res.status(404).json({ message: `Pet by ID ${petId}: not found` })
    : res.status(201).json({ message: `Pet by ID ${petId}: deleted` });
});

module.exports = deletePet;
