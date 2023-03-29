const express = require('express');
const router = express.Router();
const { auth: ctrl } = require('../../controllers');
const { auth, upload } = require('../../middleware');

router.post('/signup', ctrl.signup);

router.post('/login', ctrl.login);

router.get('/logout', auth, ctrl.logout);

router.patch('/update', auth, upload.single('avatarURL'), ctrl.updateUser);

router.get('/refresh', ctrl.refresh);

router.get('/deleteAvatar', auth, ctrl.deleteAvatar);

module.exports = router;
