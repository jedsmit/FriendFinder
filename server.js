var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var apiRoutes = require("./app/routing/apiRoutes.js")(app);

var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);








//listen
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

