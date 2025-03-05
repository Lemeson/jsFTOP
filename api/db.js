require("dotenv").config();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_LIMIT
});


async function testConnection() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT NOW() as now");
        console.log("Connected to MariaDB! Current time:", rows[0].now);
      } catch (err) {
        console.error("Error connecting to MariaDB:", err);
      } finally {
        if (conn) conn.release(); // Release the connection
      }
}

testConnection();
module.exports = pool;