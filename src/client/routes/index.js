const client = require('express').Router();

// CONTROLADORES
const { homePage, addPage } = require('../controllers');

// RUTAS PARA EL RENDERIZADO DE PLANTILLAS
client.get('/', homePage);
client.get('/add', addPage);

module.exports = client;
