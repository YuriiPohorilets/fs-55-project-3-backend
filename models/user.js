const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
    region: {
      type: String,
      required: [true, 'region is required'],
    },
    avatarURL: {
      type: String,
      required: [true, 'URL is required'],
    },
    token: {
      type: String,
      default: null,
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

const User = model('user', userSchema);

module.exports = User;
