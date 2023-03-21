const express = require('express');
const router = express.Router();
const { userPets: ctrl } = require('../../controllers');

//================ GET USER + PETS ================
router.get('/', ctrl.getUserPets);

module.exports = router;
