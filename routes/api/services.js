const express = require('express');
const router = express.Router();
const { services: ctrl } = require('../../controllers');

//================ GET ALL SERVICES ================
router.get('/', ctrl.getServices);

module.exports = router;
