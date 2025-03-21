const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");

// Configure Handlebars as template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/resources/views");

// Middleware
app.use(express.static("public")); // static files
app.use(morgan("combined")); // HTTP Logger

// Route handler
route(app)

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
