const client = require('express').Router();

// CONTROLADORES
const { homePage, addPage, postAddPage, getAllEmails } = require('../controllers');

// RUTAS PARA EL RENDERIZADO DE PLANTILLAS
client.get('/', homePage);
client.route('/add').get(addPage).post(postAddPage);
client.route('/emails').get(getAllEmails);

module.exports = client;
