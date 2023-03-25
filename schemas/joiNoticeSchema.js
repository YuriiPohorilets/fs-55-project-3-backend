const Joi = require('joi');
const { namePattern } = require('./patterns');

const joiNoticeSchema = Joi.object({
  title: Joi.string().min(6).required(),
  name: Joi.string().pattern(namePattern).min(2).max(16).required(),
  birthday: Joi.string().required(),
  breed: Joi.string().min(2).max(20).required(),
  place: Joi.string().min(3).required(),
  sex: Joi.string().valid('male', 'female').required(),
  category: Joi.string().valid('sell', 'in-good-hands', 'lost-found').required(),
  price: Joi.string(),
  petAvatarURL: Joi.string(),
  comment: Joi.string().min(8).max(120),
});

module.exports = joiNoticeSchema;
