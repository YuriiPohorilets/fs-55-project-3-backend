const express = require('express');
const router = express.Router();
const { pets: ctrl } = require('../../controllers');
const { auth, upload } = require('../../middleware');

router.post('/', auth, upload.single('photo'), ctrl.createPet);

router.delete('/:petId', auth, ctrl.deletePet);

module.exports = router;
