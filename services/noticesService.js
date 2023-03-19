const { Notice } = require('../models');

const createNotice = async req => {
  const createdNotice = await Notice.create({ ...req.body });
  return createdNotice;
};

const getAll = async req => {
    const { category } = req.params;
  const notices = await Notice.find({ category });

  return notices;
};

const getOne = async req => {
    const {noticeId} = req.params;
    const notice = await Notice.findById(noticeId);
    return notice;
}

module.exports = { createNotice, getAll, getOne };
