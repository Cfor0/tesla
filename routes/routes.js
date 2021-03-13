const express = require("express");
const router = express.Router();
const mysql = require("mysql");

// Database Parameters
const db = mysql.createConnection({
    host: "localhost",
    user: "devuser",
    password: "password",
    database: "tesla_db",
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

router.post("/createAccount", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO create_account (user_first_name, user_last_name, email_address, user_password) VALUES(?,?,?,?)",
        [firstName, lastName, email, password],
        (err, result) => {
            console.log(err);
        },
        res.send(req.body)
    );
});

router.post("/login", (req, res) => {
    console.log("RUNNING FROM LOGIN POST");
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);

    db.query(
        "SELECT * FROM create_account WHERE email_address = ? AND user_password = ?",
        [email, password],
        (err, result) => {
            console.log(err);
            if (result.length <= 0) {
                console.log("NO SUCCESS");
                console.log(err);
                res.send(err);
            }

            // If result comes back
            if (result.length > 0) {
                console.log("SUCCESS");
                console.log(result);
                res.send("Success");
            }
        }
    );
});

module.exports = router;
