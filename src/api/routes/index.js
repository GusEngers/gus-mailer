const api = require('express').Router();

// CONTROLADORES
const { homeApi, getEmail, sendEmailFromMe, sendEmailFrom } = require('../controllers');

// RUTAS PARA MANEJAR LAS SOLICITUDES DEL SERVIDOR
api.get('/', homeApi);
api.route('/emails/:id').get(getEmail);
api.route('/send/:project').post(sendEmailFromMe);
api.route('/send_external/:project').post(sendEmailFrom);

module.exports = api;
