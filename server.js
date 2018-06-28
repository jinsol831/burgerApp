var express = require("express");
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 3000;

var app = express();
// static content for the public to serve
app.use(express.static("public"));

//parse application form urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//parse application json
app.use(bodyParser.json());
// set handlebars
var handleb = require("express-handlebars");


app.engine("handlebars", handleb({ defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routes = require("./Controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){



    console.log("server listening on http://localhost:"+ PORT);
});