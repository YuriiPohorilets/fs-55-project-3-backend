const express = require('express');
const router = express.Router();

const {auth: ctrl} = require("../../controllers/index");

//================ REGISTER USER ================
router.post('/signup', ctrl.signup);

//================ LOGIN USER ================
router.post('/login', ctrl.login );

//================ LOGOUT USER ================
router.post('/logout', ctrl.login);

//================ UPDATE USER ================
// router.patch('/update', async (req, res) => {
//   res.json({ message: '' });
// });

module.exports = router;
