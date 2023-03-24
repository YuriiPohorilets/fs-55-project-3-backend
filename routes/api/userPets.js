const express = require('express');
const router = express.Router();
const { userPets: ctrl } = require('../../controllers');
const { auth } = require('../../middleware');

//================ GET USER + PETS ================
router.get('/', auth, ctrl.getUserPets);

module.exports = router;
