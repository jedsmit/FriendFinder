
//array containing survey data of users

var friendsData = [
    {
        name: "A goat",
        photo: "https://thumbs.newschoolers.com/index.php?src=http%3A%2F%2Ffc09.deviantart.net%2Ffs70%2Fi%2F2010%2F010%2F1%2Fd%2FGoat_roar_by_fbcota.jpg&size=400x1000",
        scores: [
            1,
            5,
            5,
            5,
            5,
            4,
            3,
            5,
            2,
            2
        ]
    },
    {
        name: "",
        scores: [
            5,
            2,
            4,
            1,
            5,
            2,
            3,
            3,
            3,
            1
        ]
    },
    {
        name: "nerd",
        scores: [
            5,
            2,
            4,
            1,
            5,
            2,
            3,
            3,
            3,
            1
        ]
    },
    {
        name: "Joe Mamma",
        scores: [
            4,
            3,
            1,
            2,
            5,
            3,
            3,
            3,
            3,
            5
        ]
    },

];

//using jquery, get the user's scores from the chosen radio buttons on the survey 

//push the scores into an array

//add array and user name as an object in the friendsData array.

//compare score differences against all other users, determine total score difference vs each user 

//display user with smallest score difference using a modal.

module.exports = friendsData;