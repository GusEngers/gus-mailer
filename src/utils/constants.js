const ApiError = require('./error-class-api');

require('dotenv').config();

/**
 * Módulo para almacenar valores constantes y para manejar las variables de entorno
 */
module.exports = {
  /* Constantes */
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',

  /* Configuraciones con variables de entorno */
  DB_URI: process.env.DB_URI,
  PORT: process.env.PORT ?? '3000',
  MODE: !process.env.NODE_ENV ? process.env.NODE_ENV : process.env.NODE_ENV.toLowerCase(),

  /* Métodos */
  get IS_DEVELOPMENT() {
    return this.MODE === this.DEVELOPMENT ? true : false;
  },
  get IS_PRODUCTION() {
    return this.MODE === this.PRODUCTION ? true : false;
  },
};
