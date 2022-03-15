const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = [];
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var date = new Date();
  var day = date.getDay();
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var currentday = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: currentday, listItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.job;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function (req, res) {
  console.log("Port is running 3000.");
});
