// SERVICIOS QUE SE EJECUTAN EN LOS CONTROLADORES DE RUTAS
const { Recipient, EmailParams } = require('mailersend');
const ApiError = require('../../utils/error-class-api');
const Email = require('../models/email');
const { email } = require('../../config/mailersend');

async function getListEmails() {
  const emails = await Email.find({}).lean();
  return emails;
}

async function sendEmailTemplate(templateId, recipient, subject, values = {}) {
  const emailDB = await Email.findOne({ templateId }).lean();
  if (!emailDB) throw new ApiError('Template email not found', 404);

  const recipients = [new Recipient(recipient.email, recipient.name)];
  let personalization = [
    {
      email: recipient.email,
      data: values,
    },
  ];

  const emailParams = new EmailParams()
    .setFrom(email.__sender)
    .setTo(recipients)
    .setPersonalization(personalization)
    .setTemplateId(emailDB.templateId)
    .setSubject(subject);
  const data = await email.sendEmail(emailParams);
  if (!data) throw new ApiError('Error send email with template', 400);
}

module.exports = { getListEmails, sendEmailTemplate };
