module.exports = {
  /**
   * Middleware para manejo de rutas innexistentes en la sección API
   * @param {Request} req Solicitud
   * @param {Response} res Respuesta
   */
  notFoundApiHandler: (req, res, next) => {
    res.status(404).json({ message: 'This route is not available or does not exist', statusCode: 404 });
  },
  /**
   * Middleware para manejo de rutas innexistentes en la sección CLIENT
   * @param {Request} req Solicitud
   * @param {Response} res Respuesta
   */
  notFoundClientHandler: (req, res, next) => {
    res.render('pages/not-found');
  },
};
