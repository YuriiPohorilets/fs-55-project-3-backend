const asyncHandler = require('express-async-handler');
const { News } = require('../../models');

const getNews = asyncHandler(async (req, res) => {
  const news = await News.find({});

  res.status(200).json(news);
});

module.exports = getNews;
