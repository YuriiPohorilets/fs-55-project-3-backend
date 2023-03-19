const { model, Schema } = require('mongoose');

const serviceSchema = new Schema({
  title: String,
  url: {
    type: String,
    default: null,
  },
  addressUrl: {
    type: String,
    default: null,
  },
  imageUrl: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  workDays: [
    {
      isOpen: Boolean,
      from: String,
      to: String,
    },
  ],
});

const Services = model('services', serviceSchema);

module.exports = Services;
