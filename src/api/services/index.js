// SERVICIOS QUE SE EJECUTAN EN LOS CONTROLADORES DE RUTAS

const { isObjectIdOrHexString } = require('mongoose');
const Email = require('../models/email');

module.exports = {
  getEmail: async (id) => {
    if (!isObjectIdOrHexString(id)) throw new Error('Invalid id');
    const email = await Email.findById(id).lean();
    return email;
  },
};
