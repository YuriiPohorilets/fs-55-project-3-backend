const asyncHandler = require('express-async-handler');
const { getAllNews } = require('../../services/newsService');

const getNews = asyncHandler(async (req, res) => {
  const news = await getAllNews();

  res.json({
    status: 'success',
    code: 200,
    result: [...news],
  });
});

module.exports = getNews;
