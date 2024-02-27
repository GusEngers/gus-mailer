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
};
