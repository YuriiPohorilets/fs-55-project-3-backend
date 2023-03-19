const Joi = require('joi');
const { notNumNotSpecChar } = require('./patterns');

const joiPetSchema = Joi.object({
  name: Joi.string().pattern(notNumNotSpecChar).min(2).max(16).required(),
  birthday: Joi.string().required(),
  breed: Joi.string().min(2).max(16).required(),
  comment: Joi.string().min(8).max(120).required(),
});

module.exports = joiPetSchema;
