const { Schema, model } = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new Schema(
  {
   email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    }, 
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    birthday: {
      type: String,
      default: '00.00.0000',
    },
    phone: {
      type: String,
    },
    city: {
      type: String,
    },
    avatarURL: {
      type: String,
      required: [true, 'URL is required'],
    },
    verify: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      default: null,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
    favorite: {
      type: [{ type: Schema.Types.ObjectId }],
      default: [],
      ref: 'notice',
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});
const User = model('user', userSchema);

module.exports = { verifyEmailSchema, User };
