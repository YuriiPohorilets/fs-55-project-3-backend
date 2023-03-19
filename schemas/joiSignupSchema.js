const Joi = require('joi');

const { emailPattern, locationPattern, namePattern, passwordPattern, phonePattern } = require('./patterns');

const joiSignupSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).min(10).max(40).required(),
  password: Joi.string().pattern(passwordPattern).required(),
  name: Joi.string().pattern(namePattern).required(),
  phone: Joi.string().pattern(phonePattern).allow(null, ''),
  city: Joi.string().pattern(locationPattern).allow(null, ''),
});

module.exports = joiSignupSchema;
