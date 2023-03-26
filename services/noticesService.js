const { Notice, User } = require('../models');

const createNotice = async (body, _id, email, phone, petAvatarURL) => {
  const createdNotice = await Notice.create({ ...body, owner: _id, email, phone, petAvatarURL });
  return createdNotice;
};

const getAllByCategory = async (category, query, page, limit) => {
  const skip = (page - 1) * limit;

  const notices = await Notice.find({ category, title: { $regex: `${query}`, $options: 'i' } }, '', {
    skip,
    limit: Number(limit),
  }).sort({ updatedAt: -1 });

  const resultNotices = notices.map(notice => ({
    category: notice.category,
    _id: notice._id,
    title: notice.title,
    breed: notice.breed,
    place: notice.place,
    birthday: notice.birthday,
    petAvatarURL: notice.petAvatarURL,
    price: notice.price,
  }));
  const resultLength = await getLengthNotices(Notice, { category, title: { $regex: `${query}`, $options: 'i' } });

  return { resultNotices, resultLength };
};

const getLengthNotices = async (model, param) => {
  const notices = await model.find(param);
  if (!notices) return null;

  return notices.length;
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

const getFavoriteNotices = async (_id, page, limit) => {
  const { favorite } = await User.findById(_id);
  const ids = favorite.map(el => el.toString());

  const notices = await Notice.find({});

  const favoriteNotices = ids.map(id => {
    return notices.find(notice => notice._id.toString() === id);
  });
  const resultLength = favoriteNotices.length;

  favoriteNotices.sort(
    (firstNotice, secondNotice) => secondNotice.updatedAt - firstNotice.updatedAt
  );

  function favoritePagination(arr, pagPage, pagLimit) {
    const start = (pagPage - 1) * pagLimit;
    return arr.splice(start, pagLimit);
  };

  const result = favoritePagination(favoriteNotices, page, limit);

  return { result, resultLength };
};

const getNoticesByUser = async (id, page, limit) => {
  const skip = (page - 1) * limit;

  const notices = await Notice.find({ owner: id }, '', {
    skip,
    limit: Number(limit),
  }).sort({ updatedAt: -1 });

  const noticesLength = await getLengthNotices(Notice, { owner: id });

  return { notices, noticesLength };
};

const removeUserNotice = async (userId, noticeId) => {
  const deletedNotice = await Notice.findOneAndRemove({ _id: noticeId, owner: userId });
  if (!deletedNotice) return null;
  return true;
};

module.exports = {
  createNotice,
  getAllByCategory,
  getOneById,
  addDeleteToFavorite,
  getFavoriteNotices,
  getNoticesByUser,
  removeUserNotice,
};
