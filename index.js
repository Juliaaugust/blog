var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const arr = ["First", "Second", "Third"];

app.get('/', function (req, res) {
  res.render("index.ejs", {arr: arr});
});

app.get('/create', function (req, res) {
  res.render("create");
});

app.post('/create', function (req, res) {
  arr.push(req.body.text);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
