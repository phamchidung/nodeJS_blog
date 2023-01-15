const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({       
  extname: '.hbs'
}));      // create engine and then name it 'hbs', extname is the way we config extension name for template files. It's must
// be same the engine name
app.set("view engine", "hbs"); // use view engine name 'hbs'
app.set("views", path.join(__dirname, "resources/views")); // config 'views' folder direction

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
