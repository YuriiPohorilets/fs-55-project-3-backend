// const { notices } = require('../controllers');
const { Notice, User } = require('../models');
// const { id } = require('../schemas/joiSignupSchema');

const createNotice = async req => {
  const { _id, email, phone } = req.user;
  const createdNotice = await Notice.create({ ...req.body, owner: _id, email, phone });
  return createdNotice;
};

const getAll = async req => {
  const { category } = req.params;
  const notices = await Notice.find({ category });

  return notices;
};

const getOne = async req => {
  const { noticeId } = req.params;
  const notice = await Notice.findById(noticeId);
  return notice;
};

const addDeleteToFavorite = async req => {
  const { noticeId } = req.params;
  const { _id } = req.user;
  const user = await User.findById(_id);
  // const notice = await Notice.findOne({ _id: noticeId, owner: user.id });

  if (!user) return null;
  
  const isNotice = user.favorite.find(el => el.toString() === noticeId);

    if (isNotice) {
    const arr = user.favorite.filter(notice => notice.toString() !== noticeId);
    user.favorite = arr;
    await user.save();
  } else if (!isNotice) {
    user.favorite.push(noticeId);
    await user.save();
    // await User.findOneAndUpdate({_id}, {$push: {favorite: [noticeId]}});
  }

  return user.favorite;
};

const getFavoriteNotices = async req => {
  const { _id } = req.user;
  const { favorite } = await User.findById(_id);
  const ids = favorite.map(el => el.toString());

  const notices = await Notice.find({});

  const favoriteNotices = ids.map(id => {
    return notices.find(notice => notice._id.toString() === id);
  });

  return favoriteNotices;
};

module.exports = { createNotice, getAll, getOne, addDeleteToFavorite, getFavoriteNotices };
