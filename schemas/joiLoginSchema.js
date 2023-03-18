const Joi = require('joi');

const { emailPattern, passwordPattern } = require('./patterns');

const joiLoginSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).min(10).max(40).required(),
  password: Joi.string().pattern(passwordPattern).required(),
 
});

module.exports = joiLoginSchema;