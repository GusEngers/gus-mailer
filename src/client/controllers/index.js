const services = require('../services');

// CONTROLADORES DE RUTAS

module.exports = {
  homePage: (req, res, next) => {
    try {
      res.render('pages/home');
    } catch (error) {
      next(error);
    }
  },
  addPage: (req, res, next) => {
    try {
      res.render('pages/add', { info: null, error: null });
    } catch (error) {
      next(error);
    }
  },
  postAddPage: async (req, res, next) => {
    try {
      const { project, variables, message } = req.body;
      await services.postAddEmail({ project, variables: variables.split(';'), message });
      res.render('pages/add', { info: 'Correo añadido', error: null });
    } catch (error) {
      res.render('pages/add', { info: null, error: error.message });
    }
  },
  getAllEmails: async (req, res, next) => {
    try {
      const emails = await services.getEmails();
      res.render('pages/emails', { emails });
    } catch (error) {
      next(error);
    }
  },
};
