// CONTROLADORES DE RUTAS
const services = require('../services');

async function getListEmails(req, res, next) {
  try {
    const emails = await services.getListEmails();
    res.json(emails);
  } catch (error) {
    next(error);
  }
}

async function sendEmailTemplate(req, res, next) {
  try {
    const { email, name, subject } = req.query;
    const { templateId } = req.params;
    await services.sendEmailTemplate(templateId, { email, name }, subject, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

async function sendEmailMessage(req, res, next) {
  try {
    const { email, name, subject } = req.query;
    const { id } = req.params;
    await services.sendEmailMessage(id, { email, name }, subject, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getListEmailsController: [getListEmails],
  sendEmailTemplateController: [sendEmailTemplate],
  sendEmailMessageController: [sendEmailMessage],
};
