const { model, Schema } = require('mongoose');

const Email = model(
  'email',
  new Schema({
    project: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    variables: [
      {
        type: String,
      },
    ],
    message: {
      type: String,
      required: true,
    },
  })
);

module.exports = Email;
