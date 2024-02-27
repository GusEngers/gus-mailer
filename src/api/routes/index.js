const api = require('express').Router();

// CONTROLADORES
const { homeApi } = require('../controllers');

// RUTAS PARA MANEJAR LAS SOLICITUDES DEL SERVIDOR
api.get('/', homeApi);

module.exports = api;
