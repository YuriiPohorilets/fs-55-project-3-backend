const asyncHandler = require('express-async-handler');
const { getAllNews } = require('../../services/newsService');

const getNews = asyncHandler(async (req, res) => {
  const news = await getAllNews();

  res.status(200).json(news);
});

module.exports = getNews;
