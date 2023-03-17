const express = require('express');
const router = express.Router();

//================ REGISTER USER ================
router.post('/register', async (req, res) => {
  res.json({ message: '' });
});

//================ LOGIN USER ================
router.post('/login', async (req, res) => {
  res.json({ message: '' });
});

//================ LOGOUT USER ================
router.post('/logout', async (req, res) => {
  res.json({ message: '' });
});

//================ UPDATE USER ================
router.patch('/update', async (req, res) => {
  res.json({ message: '' });
});

module.exports = router;
