const api = require('express').Router();

// CONTROLADORES
const { homeApi, getEmail } = require('../controllers');

// RUTAS PARA MANEJAR LAS SOLICITUDES DEL SERVIDOR
api.get('/', homeApi);
api.route('/emails/:id').get(getEmail);

module.exports = api;
