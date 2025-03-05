const express = require("express");
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON body

// Route to insert user data into MariaDB
app.post("/api/users", async (req, res) => {
    const { name, email, password } = req.body;

    // Generate a hash of the password before saving
    const salt = await bcrypt.genSalt(10); // Generate a random "salt"
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
        res.json({ message: "User inserted successfully!" });
    } catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ error: "Database error" });
    } finally {
        if (conn) conn.release();
    }
});

// Route to fetch all users
app.get("/api/users", async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM users");
        res.json(rows); // Return users as JSON
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ error: "Database error" });
    } finally {
        if (conn) conn.release();
    }
});

// Export the Express app as a serverless function
module.exports = app;


//module.exports = app;

//Start server
// app.listen(3000, () => {
//     console.log("🚀 Server running on https://js-ftop-rho.vercel.app");
// });