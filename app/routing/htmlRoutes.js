var path = require("path");
var express = require("express")
var app = express;

module.exports = function (app) {
    //default catch-all to homepage
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/home.html"))
    })

    //get route serves survey to client
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "/../public/survey.html"))
    });


};