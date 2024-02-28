const nodemailer = require('nodemailer');
const {
  NODEMAILER_EMAIL,
  NODEMAILER_PASSWORD,
  NODEMAILER_OAUTH_CLIENTID,
  NODEMAILER_OAUTH_CLIENT_SECRET,
  NODEMAILER_OAUTH_REFRESH_TOKEN,
} = require('../utils/constants');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASSWORD,
    clientId: NODEMAILER_OAUTH_CLIENTID,
    clientSecret: NODEMAILER_OAUTH_CLIENT_SECRET,
    refreshToken: NODEMAILER_OAUTH_REFRESH_TOKEN,
  },
});

module.exports = { transporter };
