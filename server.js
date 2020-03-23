var express = require("express");
var path = require("path");
var orm = require("./config/orm");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);


app.listen(PORT, function() {
    console.log("Sever live and listening on PORT " + PORT + "!");
  });
  