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
    .setSubject(subject)
    .setTemplateId(emailDB.templateId)
    .setPersonalization(personalization);
  const data = await email.sendEmail(emailParams);
  if (!data) throw new ApiError('Error send email with template', 400);
}

async function sendEmailMessage(id, recipient, subject, values = {}) {
  const emailDB = await Email.findById(id).lean();
  if (!emailDB) throw new ApiError('Message email not found', 404);

  const recipients = [new Recipient(recipient.email, recipient.name)];
  let text = emailDB.message;
  for (let variable of emailDB.variables) {
    text = text.replace(`#${variable}#`, values[variable]);
  }
  const emailParams = new EmailParams()
    .setFrom(email.__sender)
    .setTo(recipients)
    .setSubject(subject)
    .setHtml(text);
  const data = await email.sendEmail(emailParams);
  if (!data) throw new ApiError('Error send email with message', 400);
}

module.exports = { getListEmails, sendEmailTemplate, sendEmailMessage };
