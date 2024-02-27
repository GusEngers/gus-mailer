// CONTROLADORES DE RUTAS

module.exports = {
  homePage: (req, res, next) => {
    try {
      res.render('pages/home', { title: 'Express-Server' });
    } catch (error) {
      next(error);
    }
  },
};
