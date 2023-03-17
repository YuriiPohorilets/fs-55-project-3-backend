const express = require('express');
const router = express.Router();
const { news: ctrl } = require('../../controllers');

//================ GET ALL NEWS ================
router.get('/', ctrl.getNews);

module.exports = router;
