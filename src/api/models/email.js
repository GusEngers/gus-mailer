const { model, Schema } = require('mongoose');

const Email = model(
  'email',
  new Schema({
    project: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    templateId: String,
    variables: [String],
    message: String,
  })
);

module.exports = Email;
