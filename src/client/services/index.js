// SERVICIOS QUE SE EJECUTAN EN LOS CONTROLADORES DE RUTAS

const Email = require('../../api/models/email');

module.exports = {
  postAddEmail: async ({ project, templateId,variables, message }) => {
    const email = new Email({ project, templateId, variables, message });
    await email.save();
  },
  getEmails: async () => {
    const emails = await Email.find({}).lean();
    return emails;
  },
};
