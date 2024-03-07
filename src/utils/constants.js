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
  DB_URI: process.env.DB_URI,

  /* Métodos */
  get IS_DEVELOPMENT() {
    return this.MODE === this.DEVELOPMENT ? true : false;
  },
  get IS_PRODUCTION() {
    return this.MODE === this.PRODUCTION ? true : false;
  },

  /* Nodemailer */
  // NODEMAILER_EMAIL: process.env.NODEMAILER_EMAIL,
  // NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD,
  // NODEMAILER_OAUTH_CLIENTID: process.env.NODEMAILER_OAUTH_CLIENTID,
  // NODEMAILER_OAUTH_CLIENT_SECRET: process.env.NODEMAILER_OAUTH_CLIENT_SECRET,
  // NODEMAILER_OAUTH_REFRESH_TOKEN: process.env.NODEMAILER_OAUTH_REFRESH_TOKEN,

  /* Mailersend */
  MAILERSEND_API_KEY: process.env.MAILERSEND_API_KEY,
  MAILERSEND_SENDER: process.env.MAILERSEND_SENDER,
};
