const express = require('express');
const router = express.Router();

const {auth: ctrl} = require("../../controllers");
const {auth}  = require('../../middleware');

//================ REGISTER USER ================
router.post('/signup', ctrl.signup);

//================ LOGIN USER ================
router.post('/login', ctrl.login );

//================ LOGOUT USER ================
router.get('/logout', auth, ctrl.logout);

//================ UPDATE USER ================
router.patch('/update', auth, ctrl.updateUser);

module.exports = router;
