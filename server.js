// Express declaration
const express = require("express");

// Declarations
const routes = require("./routes/routes");
const cors = require("cors");

// Variables
const PORT = 4000 || process.argv.PORT;

// Middleware
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/", routes);

// Listening method
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
