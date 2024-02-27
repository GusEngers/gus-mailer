// SERVICIOS QUE SE EJECUTAN EN LOS CONTROLADORES DE RUTAS

const { isObjectIdOrHexString } = require('mongoose');
const Email = require('../models/email');
const { transporter } = require('../../config/nodemailer');
const { NODEMAILER_EMAIL } = require('../../utils/constants');

module.exports = {
  getEmail: async (id) => {
    if (!isObjectIdOrHexString(id)) throw new Error('Invalid id');
    const email = await Email.findById(id).lean();
    return email;
  },
  sendEmailFromMe: async (project, body, subject = 'Sin Asunto') => {
    const email = await Email.findOne({ project: project.toLowerCase() }).lean();
    if (!email) throw new Error('Email not found');
    let message = email.message;
    for (let variable of email.variables) {
      message = message.replace(`#${variable}#`, `${body[variable]}`);
    }
    await transporter.sendMail({
      from: NODEMAILER_EMAIL,
      to: NODEMAILER_EMAIL,
      subject,
      html: message,
    });
  },
};
