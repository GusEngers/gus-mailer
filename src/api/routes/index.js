const api = require('express').Router();

// CONTROLADORES
const { homeApi, getEmail, sendEmailFromMe } = require('../controllers');

// RUTAS PARA MANEJAR LAS SOLICITUDES DEL SERVIDOR
api.get('/', homeApi);
api.route('/emails/:id').get(getEmail);
api.route('/send/:project').post(sendEmailFromMe);

module.exports = api;
