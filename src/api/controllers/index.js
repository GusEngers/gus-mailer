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
};
