var express = require("express")
var path = require("path");
var app = express;
var friendsData = require("../data/friends.js");



module.exports = function (app) {

    app.get("/api/friends", (req, res) => {
        res.send(friendsData);
    });

    app.post("/api/friends", (req, res) => {
        console.log(req.body)
        var newFriend = req.body;
        var lowDifference = 50;
        var bff = "";
        //compare scores from new friend to scores in friends array. 
        //iterate through objects in friendsData
        for (var i = 0; i < friendsData.length; i++) {
            var currentDiffTotal = 0;
            //iterate through score arrays, get difference of scores and add them together
            for (var j = 0; j < newFriend.length; j++) {
                var currentScoreDiff = Math.abs(newFriend.scores.j - friendsData.i.scores.j);
                currentDiffTotal += currentScoreDiff;
            };
            //checks to see if score difference is lower than the current lowest difference
            if (currentDiffTotal < lowDifference) {
                lowDifference = currentDiffTotal;
                bff = friendsData[i].name;
            };


            if (currentDiffTotal < lowDifference) {
                lowDifference = totalDifference;
            };
        };
        console.log(lowDifference);



    });
};