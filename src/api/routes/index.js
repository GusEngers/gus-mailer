const api = require('express').Router();

// CONTROLADORES
const con = require('../controllers');

// RUTAS PARA MANEJAR LAS SOLICITUDES DEL SERVIDOR
api.route('/emails').get(con.getListEmailsController);
api.route('/template/:template').post(con.sendEmailTemplateController);

module.exports = api;
