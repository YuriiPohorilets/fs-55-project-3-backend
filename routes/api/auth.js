const express = require('express');
const router = express.Router();
const { auth: ctrl } = require('../../controllers');
const { auth, upload } = require('../../middleware');

//================ REGISTER USER ================
router.post('/signup', ctrl.signup);

//================ LOGIN USER ================
router.post('/login', ctrl.login);

//================ LOGOUT USER ================
router.get('/logout', auth, ctrl.logout);

//================ UPDATE USER ================
router.patch('/update', auth, upload.single('avatarURL'), ctrl.updateUser);

//================ REFRESH TOKEN ================
router.get('/refresh', ctrl.refresh);

//================ DELETE USER AVATAR ================
router.get('/deleteAvatar', auth, ctrl.deleteAvatar);

module.exports = router;
