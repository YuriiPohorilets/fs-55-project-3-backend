const express = require('express');
const router = express.Router();
const { notices: ctrl } = require('../../controllers');
const { auth, upload } = require('../../middleware');

//================ GET NOTICES BY CATEGORY ================
router.get('/categories/:category', ctrl.getByCategory);

//================ GET NOTICE BY ID ================
router.get('/notice/:noticeId', ctrl.getById);

//================ GET USER FAVORITE NOTICES ================
router.get('/favorites', auth, ctrl.getFavorite);

//================ GET USER NOTICES ================
router.get('/', auth, ctrl.getByUser);

//================ DELETE USER NOTICE ================
router.delete('/:noticeId', auth, ctrl.removeNotice);

//================ ADD/DELETE NOTICE TO FAVORITE ================
router.patch('/:noticeId', auth, ctrl.favoriteNotices);

//================ CREATE NOTICE ================
router.post('/notice', upload.single('image'), auth, ctrl.addNotice);

//================ GET USER INFO ================
router.get('/userData', auth, ctrl.getUserData);

module.exports = router;
