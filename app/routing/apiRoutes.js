var friendsData = require("../data/friends.js");



module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        console.log("posting")
        var newFriendScores = req.body.scores;
        var bff = {
            name: "",
            photo: "",
            score: 50
        };
        console.log(newFriendScores)

        //iterate through objects in friendsData

        for (i = 0; i < friendsData.length; i++) {
            var friendName = friendsData[i].name;
            var totalScoreDiff = 0;
            //iterate through and compare scores in each friends data object to the user's scores and total the difference
            for (j = 0; j < 10; j++) {
                var indexScoreDiff = Math.abs(newFriendScores[j] - friendsData[i].scores[j]);
                totalScoreDiff += indexScoreDiff;
            }
            //if difference is lower than the lowest so far, replace it with the lower one and update the bff variable
            if (totalScoreDiff < bff.score) {
                bff.score = totalScoreDiff;
                bff.name = friendName;
                bff.photo = friendsData[i].photo
                //console.log(bff);
            }
        }
        res.json(bff);
    });
};