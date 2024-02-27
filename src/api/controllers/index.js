// CONTROLADORES DE RUTAS

module.exports = {
  homeApi: (req, res, next) => {
    res.json({ ping: 'pong' });
  },
};
