const express = require('express');
const router = express.Router();
const { notices: ctrl } = require('../../controllers');
const { authVerifyToken } = require('../../middleware');

//================ GET NOTICES BY CATEGORY ================
router.get('/categories/:category', ctrl.getByCategory);

//================ GET NOTICE BY ID ================
router.get('/:noticeId', ctrl.getById);

//================ GET USER FAVORITE NOTICES ================
router.get('/user/favorites', authVerifyToken, ctrl.getFavorite);

//================ GET USER NOTICES ================
// router.get('/:userId', async (req, res) => {
//   res.json({ message: '' });
// });

//================ DELETE USER NOTICE ================
// router.delete('/:noticeId', async (req, res) => {
//   res.json({ message: '' });
// });

//================ ADD/DELETE NOTICE TO FAVORITE ================
router.patch('/:noticeId/:favorite', authVerifyToken, ctrl.favoriteNotices);

//================ CREATE NOTICE ================
router.post('/', authVerifyToken, ctrl.addNotice);

module.exports = router;
