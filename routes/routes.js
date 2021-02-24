const express = require("express");
const router = express.Router();
const mysql = require("mysql");

// Database Parameters
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "db_password",
    database: "db_name",
});

// Establish Database Connection
db.connect((err) => {
    if (err) {
        return err;
    } else {
        console.log("MySQL Connection Established");
    }
});

// Routes go below with Database Queries
router.get("/", (req, res) => {
    res.send("Hello World From Root");
});

module.exports = router;
