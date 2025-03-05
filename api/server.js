const express = require("express");
const cors = require("cors");
const pool = require("./db");
const bcrypt = require("bcryptjs");


const app = express();
app.use(cors()); //allow front end requests
app.use(express.json()); // Parse JSON body

//Route to insert user data into MariaDB
app.post("/api/users", async(req, res) => {
    const {name, email, password} = req.body;

    // Gerar um hash da senha antes de salvar
    const salt = await bcrypt.genSalt(10); // Gera um "sal" aleatório
    const hashedPassword = await bcrypt.hash(password, salt); // Criptografa a senha
            
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
        res.json({message: "User inserted successfully!"});
    } catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({error: "Database error"});
    } finally {
        if (conn) conn.release();
    }
});

//
app.get("/api/users", async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM users");
        res.json(rows); // Retorna os usuários como JSON
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ error: "Database error" });
    } finally {
        if (conn) conn.release();
    }
});

// Export a handler function for Vercel
module.exports = (req, res) => {
    app.handle(req, res);  // Alteração aqui
};


//module.exports = app;

//Start server
// app.listen(3000, () => {
//     console.log("🚀 Server running on https://js-ftop-rho.vercel.app");
// });