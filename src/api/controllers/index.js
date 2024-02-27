// CONTROLADORES DE RUTAS

const services = require('../services');

module.exports = {
  homeApi: (req, res, next) => {
    res.json({ ping: 'pong' });
  },
  getEmail: async (req, res, next) => {
    try {
      const email = await services.getEmail(req.params.id);
      res.json(email);
    } catch (error) {
      next(error);
    }
  },
  sendEmailFromMe: async (req, res, next) => {
    try {
      await services.sendEmailFromMe(req.params.project, req.body, req.query.subject);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
};
