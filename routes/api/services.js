const express = require('express');
const router = express.Router();
const { services: ctrl } = require('../../controllers');

router.get('/', ctrl.getServices);

module.exports = router;
