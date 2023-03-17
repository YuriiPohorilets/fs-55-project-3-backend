const express = require('express');
const router = express.Router();

//================ CREATE NEW PET ================
router.post('/', async (req, res) => {
  res.json({ message: '' });
});

//================ DELETE PET BY ID ================
router.delete('/:petId', async (req, res) => {
  res.json({ message: '' });
});

module.exports = router;
