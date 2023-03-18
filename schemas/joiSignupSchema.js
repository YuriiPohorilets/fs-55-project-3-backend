const Joi = require('joi');

const { emailPattern, namePattern, passwordPattern } = require('./patterns');

const joiSignupSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).min(10).max(40).required(),
  password: Joi.string().pattern(passwordPattern).required(),
  name: Joi.string().pattern(namePattern).required(),
  // phone: Joi.string().pattern(phonePattern).required(),
  // token: Joi.string(),
});

module.exports = joiSignupSchema;
