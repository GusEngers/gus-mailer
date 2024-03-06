const nodemailer = require('nodemailer');
const {
  // NODEMAILER_EMAIL,
  NODEMAILER_PASSWORD,
  // NODEMAILER_OAUTH_CLIENTID,
  // NODEMAILER_OAUTH_CLIENT_SECRET,
  // NODEMAILER_OAUTH_REFRESH_TOKEN,
} = require('../utils/constants');

const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  secure: true,
  port: 465,
  auth: {
    user: 'resend',
    pass: NODEMAILER_PASSWORD,
  },
});

module.exports = { transporter };
