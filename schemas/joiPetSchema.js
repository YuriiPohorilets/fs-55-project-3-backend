const Joi = require('joi').extend(require('@joi/date'));
const { notNumNotSpecChar } = require('./patterns');

const joiPetSchema = Joi.object({
  name: Joi.string().pattern(notNumNotSpecChar).min(2).max(16).required(),
  birthday: Joi.date().format(['DD.MM.YYYY']).utc().allow(null, ''),
  breed: Joi.string().min(2).max(16).required(),
  comment: Joi.string().min(8).max(120).required(),
  photo: Joi.string().required(),
});

module.exports = joiPetSchema;
