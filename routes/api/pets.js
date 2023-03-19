const express = require('express');
const router = express.Router();
const { pets: ctrl } = require('../../controllers');
const { authVerifyToken } = require('../../middleware');

//================ CREATE NEW PET ================
router.post('/', authVerifyToken, ctrl.createPet);

//================ DELETE PET BY ID ================
router.delete('/:petId', authVerifyToken, ctrl.deletePet);

module.exports = router;
