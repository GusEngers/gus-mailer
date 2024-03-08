const api = require('express').Router();

// CONTROLADORES
const con = require('../controllers');

// RUTAS PARA MANEJAR LAS SOLICITUDES DEL SERVIDOR
api.route('/emails').get(con.getListEmailsController);
api.route('/template/:templateId').post(con.sendEmailTemplateController);
api.route('/message/:id').post(con.sendEmailMessageController);

module.exports = api;
