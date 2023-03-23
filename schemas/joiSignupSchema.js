const Joi = require('joi').extend(require('@joi/date'));

const {
  emailPattern,
  locationPattern,
  namePattern,
  passwordPattern,
  phonePattern,
} = require('./patterns');

const joiSignupSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).min(10).max(64).required(),
  password: Joi.string().pattern(passwordPattern).min(7).max(32).required(),
  name: Joi.string().pattern(namePattern).min(1).max(24).required(),
  phone: Joi.string().pattern(phonePattern).allow(null, ''),
  city: Joi.string().pattern(locationPattern).min(5).max(35).allow(null, ''),
  birthday: Joi.date().format(['DD.MM.YYYY']).utc().allow(null, ''),
});

module.exports = joiSignupSchema;
