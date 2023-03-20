const express = require('express');
const router = express.Router();
const { notices: ctrl } = require('../../controllers');
const { auth } = require('../../middleware');

//================ GET NOTICES BY CATEGORY ================
router.get('/categories/:category', ctrl.getByCategory);

//================ GET NOTICE BY ID ================
router.get('/:noticeId', ctrl.getById);

//================ GET USER FAVORITE NOTICES ================
router.get('/user/favorites', auth, ctrl.getFavorite);

//================ GET USER NOTICES ================
// router.get('/:userId', async (req, res) => {
//   res.json({ message: '' });
// });

//================ DELETE USER NOTICE ================
// router.delete('/:noticeId', async (req, res) => {
//   res.json({ message: '' });
// });

//================ ADD/DELETE NOTICE TO FAVORITE ================
router.patch('/:noticeId', auth, ctrl.favoriteNotices);

//================ CREATE NOTICE ================
router.post('/', auth, ctrl.addNotice);

module.exports = router;
