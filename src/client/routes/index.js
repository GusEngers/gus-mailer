const client = require('express').Router();

// CONTROLADORES
const { homePage, addPage, postAddPage } = require('../controllers');

// RUTAS PARA EL RENDERIZADO DE PLANTILLAS
client.get('/', homePage);
client.route('/add').get(addPage).post(postAddPage);

module.exports = client;
