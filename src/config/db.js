const { IS_DEVELOPMENT, IS_PRODUCTION, MODE } = require('../utils/constants');

/**
 * Establece la conexión a la base de datos
 */
async function db() {
  try {
    if (IS_DEVELOPMENT) {
      setTimeout(() => {
        process.stdout.write(`[INFO] Database connected in '${MODE}' mode\n`);
      }, 1000);
    } else if (IS_PRODUCTION) {
      setTimeout(() => {
        process.stdout.write(`[INFO] Database connected in '${MODE}' mode\n`);
      }, 1000);
    } else {
      throw new Error('Entorno no establecido');
    }
  } catch (error) {
    process.stdout.write(`[ERROR] Error connected database: ${error.message}`);
    process.exit(1);
  }
}

module.exports = db;
