const { News } = require('../models');

const getAllNews = async () => {
  const news = await News.find({}).sort({ date: -1 });
  return news;
};

module.exports = {
  getAllNews,
};
