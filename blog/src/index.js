const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

// Configure Handlebars as template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/resources/views");

// Middleware
app.use(express.static("public")); // static files
app.use(morgan("combined")); // HTTP Logger

// Route handler
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
