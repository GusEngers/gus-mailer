// SERVICIOS QUE SE EJECUTAN EN LOS CONTROLADORES DE RUTAS

const Email = require('../../api/models/email');

module.exports = {
  postAddEmail: async ({ project, variables, message }) => {
    const email = new Email({ project, variables, message });
    await email.save();
  },
};
