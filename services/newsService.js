const { News } = require('../models');

const getAllNews = async () => {
  const news = await News.find({});
  return news;
};

module.exports = {
  getAllNews,
};
