const { connect } = require('mongoose');
const { DB_URI } = require('../utils/constants');

/**
 * Establece la conexión a la base de datos
 */
async function db() {
  try {
    await connect(DB_URI);
    console.log('[INFO] Database connected');
  } catch (error) {
    process.stdout.write(`[ERROR] Error connected database: ${error.message}`);
    process.exit(1);
  }
}

module.exports = db;
