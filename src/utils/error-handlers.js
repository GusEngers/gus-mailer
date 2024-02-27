const ApiError = require('./error-class-api');

module.exports = {
  /**
   * Middleware de manejo de errores en la sección API
   * @param {Error|ApiError} err
   * @param {Request} req
   * @param {Response} res
   */
  apiErrorHandler: (err, req, res, next) => {
    console.log(err);
    if (err instanceof ApiError) {
      return res.status(err.statusCode).json(err.response);
    }
    return res.status(500).json({ message: err.message, statusCode: 500 });
  },
  /**
   * Middleware de manejo de errores en la sección CLIENT
   * @param {Error} err
   * @param {Request} req
   * @param {Response} res
   */
  clientErrorHandler: (err, req, res, next) => {
    res.render('pages/error', { error: err.message });
  },
};
