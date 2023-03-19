const express = require('express');
const router = express.Router();
const { pets: ctrl } = require('../../controllers');
const { auth } = require('../../middleware');

//================ CREATE NEW PET ================
router.post('/', auth, ctrl.createPet);

//================ DELETE PET BY ID ================
router.delete('/:petId', auth, ctrl.deletePet);

module.exports = router;
