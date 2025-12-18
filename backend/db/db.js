const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Base de données connectée avec succès !");
    connection.release();
  } catch (err) {
    console.error("Erreur de connexion à la base :", err.message);
    process.exit(1);
  }
})();

module.exports = pool;

