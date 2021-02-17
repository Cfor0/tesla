// Express declaration
const express = require("express");
const app = express();

// Declarations
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

// Variables
const PORT = 4000 || process.argv.PORT;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/", routes);

// Listening method
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
