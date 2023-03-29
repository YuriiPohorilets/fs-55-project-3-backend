const express = require('express');
const router = express.Router();
const { news: ctrl } = require('../../controllers');

router.get('/', ctrl.getNews);

module.exports = router;
