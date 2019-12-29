var express = require("express")
var path = require("path");
var app = express;
var friendsData = require("../data/friends.js");



module.exports = function (app) {

    app.get("/api/friends", (req, res) => {
        res.send(friendsData);
    });

    app.post("/api/friends", (req, res) => {
        var newFriend = req.body;
        var lowDifference = 50;
        var bff = "";
        //compare scores from new friend to scores in friends array. 
        //iterate through objects in friendsData
        for (i = 0; i < friendsData.length; i++) {
            var data = i;
            var currentDiffTotal = 0;
            //iterate through score arrays, get difference of scores and add them together
            for (i = 0; i < 10; i++) {
                var currentScoreDiff = Math.abs(newUser[scores].i - friendsData.data.scores.i);
                currentDiffTotal += currentScoreDiff;
            };
            //checks to see if score difference is lower than the current lowest difference
            if (currentDiffTotal < lowDifference) {
                lowDifference = diffTotal;
                bff = friendsData[data].name;
            };


            if (currentDiffTotal < lowDifference) {
                lowDifference = totalDifference;
            };
        };
        console.log(lowDifference);



    });
};