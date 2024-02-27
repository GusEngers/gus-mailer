const client = require('express').Router();

// CONTROLADORES
const { homePage } = require('../controllers');

// RUTAS PARA EL RENDERIZADO DE PLANTILLAS
client.get('/', homePage);

module.exports = client;
