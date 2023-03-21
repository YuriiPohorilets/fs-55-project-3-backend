const { model, Schema } = require('mongoose');

const petSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Field is required'],
  },
  birthday: {
    type: String,
    required: [true, 'Field is required'],
  },
  breed: {
    type: String,
    required: [true, 'Field is required'],
  },
  comment: {
    type: String,
    required: [true, 'Field is required'],
  },
  photo: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

const Pet = model('pets', petSchema);

module.exports = Pet;
