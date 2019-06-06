const express = require("express");
const hbs = require("express-handlebars");
const routes = require("./routes");

const app = express();

// Middleware
app.engine(
  "hbs",
  hbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Server is working");
});

module.exports = app;
