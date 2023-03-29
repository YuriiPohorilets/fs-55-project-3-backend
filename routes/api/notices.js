const express = require('express');
const router = express.Router();
const { notices: ctrl } = require('../../controllers');
const { auth, upload } = require('../../middleware');

router.get('/categories/:category', ctrl.getByCategory);

router.get('/notice/:noticeId', ctrl.getById);

router.get('/favorites', auth, ctrl.getFavorite);

router.get('/', auth, ctrl.getByUser);

router.delete('/:noticeId', auth, ctrl.removeNotice);

router.patch('/:noticeId', auth, ctrl.favoriteNotices);

router.post('/notice', upload.single('image'), auth, ctrl.addNotice);

router.get('/userData', auth, ctrl.getUserData);

module.exports = router;
