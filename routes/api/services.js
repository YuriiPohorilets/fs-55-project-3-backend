const express = require('express');
const router = express.Router();

//================ GET ALL SERVICES ================
router.get('/', async (req, res) => {
  res.json({ message: '' });
});

module.exports = router;
