const { Schema, model, SchemaTypes } = require('mongoose');

const noticeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title field is required'],
    },
    name: {
      type: String,
      required: [true, 'Name field is required'],
    },
    birthday: {
      type: String,
      required: [true, 'Birthday field is required'],
    },
    breed: {
      type: String,
      required: [true, 'Breed field is required'],
    },
    place: {
      type: String,
      required: [true, 'Place field is required'],
    },
    sex: {
      type: String,
      required: [true, 'The sex field is required'],
    },
    petAvatarURL: {
      type: String,
    },
    category: {
      type: String,
      enum: ['sell', 'in-good-hands', 'lost-found'],
      default: 'sell',
    },
    price: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Email field is required'],
    },
    phone: {
      type: String,
    },
    comments: {
      type: String,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Notice = model('notices', noticeSchema);

module.exports = Notice;
