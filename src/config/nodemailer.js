const nodemailer = require('nodemailer');
const { NODEMAILER_EMAIL, NODEMAILER_PASSWORD } = require('../utils/constants');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASSWORD,
  },
});

module.exports = { transporter };
