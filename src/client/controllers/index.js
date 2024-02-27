// CONTROLADORES DE RUTAS

module.exports = {
  homePage: (req, res, next) => {
    try {
      res.render('pages/home');
    } catch (error) {
      next(error);
    }
  },
};
