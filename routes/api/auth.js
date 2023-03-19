const express = require('express');
const router = express.Router();

const {auth: ctrl} = require("../../controllers");
const {authVerifyToken}  = require('../../middleware');

//================ REGISTER USER ================
router.post('/signup', ctrl.signup);

//================ LOGIN USER ================
router.post('/login', ctrl.login );

//================ LOGOUT USER ================
router.get('/logout', authVerifyToken, ctrl.logout);

//================ UPDATE USER ================
router.patch('/update', authVerifyToken, ctrl.updateUser);

module.exports = router;
