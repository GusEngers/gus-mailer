const { MailerSend, Sender } = require('mailersend');
const { MAILERSEND_API_KEY, MAILERSEND_SENDER } = require('../utils/constants');

/**
 * Configuración de Mailsender
 */
class Email {
  constructor() {
    this.__mailer = new MailerSend({ apiKey: MAILERSEND_API_KEY });
    this.__sender = new Sender(MAILERSEND_SENDER, 'GusEngers');
  }

  /**
   * Envía un correo según su configuración de los parámetros del correo
   * @param emailParams Parámetros del correo
   * @returns `true` si se envía el correo, `false` si no se envía
   */
  async sendEmail(emailParams) {
    const data = await this.__mailer.email
      .send(emailParams)
      .then(() => true)
      .catch((err) => {
        console.log(`[EMAILSENDER-ERROR] Error:`, err.body.errors);
        return false;
      });
    return data;
  }
}

const email = new Email();
module.exports = { email };
