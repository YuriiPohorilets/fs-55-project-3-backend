const { model, Schema } = require('mongoose');

const newsSchema = new Schema({
  title: String,
  url: String,
  description: String,
  date: {
    type: String,
    default: null,
  },
});

const News = model('news', newsSchema);

module.exports = { News };
