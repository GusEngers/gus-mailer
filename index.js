const app = require('./src/app');
const db = require('./src/config/db');
const { PORT, MODE } = require('./src/utils/constants');

/**
 * Ejecuta la conexión a la base de datos y habilita que el servidor
 * empiece a escuchar solicitudes
 */
async function main() {
  try {
    await db();
    app.listen(PORT, () => {
      process.stdout.write(`[INFO] Server listening on port '${PORT}' in '${MODE}' mode\n`);
    });
  } catch (error) {
    process.stdout.write(`[ERROR] Error starting server: ${error.message}`);
  }
}

main();
