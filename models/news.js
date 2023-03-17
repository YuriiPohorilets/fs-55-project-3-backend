const { model, Schema } = require('mongoose');

const newsSchema = new Schema({
  title: String,
  url: String,
  description: String,
  date: String,
});

const News = model('news', newsSchema);

module.exports = { News };
