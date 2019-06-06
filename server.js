const express = require("express");
const hbs = require("express-handlebars");
const routes = require("./routes");

<<<<<<< HEAD
const app = express()

// Middleware
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
//*************************************************************************** */
app.use('/', routes)
=======
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
>>>>>>> 34ff2ffcac38b0b617a6c99b8c63c161d94b5629

module.exports = app;
