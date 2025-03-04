const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: "localhost",
    user: "lem",
    password: "ifsp@#2021",
    database: "tp",
    connectionLimit: 5
})

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