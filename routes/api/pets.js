const express = require('express');
const router = express.Router();
const { pets: ctrl } = require('../../controllers');

//================ CREATE NEW PET ================
router.post('/', ctrl.createPet);

//================ DELETE PET BY ID ================
router.delete('/:petId', async (req, res) => {
  res.json({ message: '' });
});

module.exports = router;
