const { Notice, User } = require('../models');

const createNotice = async (body, _id, email, phone) => {

  const createdNotice = await Notice.create({ ...body, owner: _id, email, phone });
  return createdNotice;
};

const getAllByCategories = async category => {
  
  // const { page = 1, limit = 10, favorite } = req.query;
  // const skip = (page - 1) * limit;

  const notices = await Notice.find({ category }).sort({ updatedAt: -1 });
  return notices;
};

const getOneById = async id => {
  
  const notice = await Notice.findById(id);
  return notice;
};

const addDeleteToFavorite = async (noticeId, userId) => {
  
  const user = await User.findById(userId);
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

const getFavoriteNotices = async _id => {
  
  const { favorite } = await User.findById(_id);
  const ids = favorite.map(el => el.toString());

  const notices = await Notice.find({});

  const favoriteNotices = ids.map(id => {
    return notices.find(notice => notice._id.toString() === id);
  });

  return favoriteNotices.sort(
    (firstNotice, secondNotice) => secondNotice.updatedAt - firstNotice.updatedAt
  );
};

const getNoticesByUser = async id => {
  
  const notices = await Notice.find({ owner: id }).sort({ updatedAt: -1 });

  return notices;
};

const removeUserNotice = async (userId, noticeId) => {
  
  const deletedNotice = await Notice.findOneAndRemove({ _id: noticeId, owner: userId });
  if (!deletedNotice) return null;
  return true;
};

module.exports = {
  createNotice,
  getAllByCategories,
  getOneById,
  addDeleteToFavorite,
  getFavoriteNotices,
  getNoticesByUser,
  removeUserNotice,
};
