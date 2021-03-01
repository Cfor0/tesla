const express = require("express");
const router = express.Router();
const mysql = require("mysql");

// Database Parameters
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
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

router.get("/createAccount/:email/:password", (req, res) => {
    const email = req.params.email;
    const password = req.params.password;

    db.query("SELECT * FROM create_account ", (err, result) => {
        if (err) {
           res.send({err: err});
        } else {
            let userArray = Object.keys(result);
            userArray.filter((item) => {
                let user = result[item];
                if (
                    user.email_address === email &&
                    user.user_password === password
                ) {
                    console.log(user);
                    res.send(user);
                } else {
                    res.send({message: "Wrong login Information!"})
                }
            });
        }
    });
});

module.exports = router;
