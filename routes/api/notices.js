const express = require('express');
const router = express.Router();
const { notices: ctrl } = require('../../controllers');
const ctrWrapper = require('../../middleware/ctrWrapper');

//================ GET NOTICES BY CATEGORY ================
router.get('/:category', async (req, res) => {
  res.json({ message: '' });
});

//================ GET NOTICE BY ID ================
router.get('/:noticeId', async (req, res) => {
  res.json({ message: '' });
});

//================ GET USER FAVORITE NOTICES ================
router.get('/:userId/favorites', async (req, res) => {
  res.json({ message: '' });
});

//================ GET USER NOTICES ================
router.get('/:userId', async (req, res) => {
  res.json({ message: '' });
});

//================ DELETE USER NOTICE ================
router.delete('/:notiveId', async (req, res) => {
  res.json({ message: '' });
});

//================ ADD/DELETE NOTICE TO FAVORITE ================
router.patch('/:noticeId/favorite', async (req, res) => {
  res.json({ message: '' });
});

//================ CREATE NOTICE ================
router.post('/', ctrWrapper(ctrl.addNotice));

module.exports = router;
