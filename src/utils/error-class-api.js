/**
 * Clase personalizada para manejar los errores en la sección API
 */
class ApiError extends Error {
  /**
   * @param {string} message Mensaje de error
   * @param {number} statusCode Código de estado HTTP
   * @param {string[]} errors Errores adicionales
   */
  constructor(message, statusCode, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }

  /**
   * Retorna un objeto con el mensaje de error, el código de estado HTTP
   * y los errores adicionales si están disponibles
   */
  get response() {
    let response = {
      message: this.message,
      statusCode: this.statusCode,
    };

    if (this.errors.length) {
      response.errors = this.errors;
    }

    return response;
  }
}

module.exports = ApiError;
