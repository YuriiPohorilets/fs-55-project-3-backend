const express = require('express');
const router = express.Router();

//================ GET ALL NEWS ================
router.get('/', async (req, res) => {
  res.json({ message: 'Get all news' });
});

module.exports = router;
