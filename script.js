//All the celebrity Datas
const celebrities = [{
    name: 'Benedict Cumberbatch',
    age: '45',
    height: `6'0"`,
    funFact: 'Play Sherlock',
    status: 'married. Your mission to marry is a fail.',
    img: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMDEwMDE1MDUyNjM3NTQ0/cumberbatch_179663904jpg.jpg'
},

{
    name: 'Chris Hemsworth',
    age: '38',
    height: `6'3"`,
    funFact: 'Australian',
    status: 'married. Your mission to marry is a fail.',
    img: 'https://www.the-sun.com/wp-content/uploads/sites/6/2021/05/c81b7b96-3fea-47b0-bc67-c695c75f0a95.jpg'
},

{
    name: 'Will Smith',
    age: '53',
    height: `6'2"`,
    funFact: "Can solve Rubik's Cube in 55 seconds",
    status: 'married. Your mission to marry is a fail.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0tz9q7U2dVBL6qqp-A-WDMyktyZSAJdavwiUcGEB7YkXYwo0p2E3BYAGVbhMcywT6b4&usqp=CAU'
},

{
    name: 'Selena Gomez',
    age: '29',
    height: `5'5"`,
    funFact: 'Play Gianna on Barney',
    status: 'single. Your mission to marry is a success.',
    img: 'https://www.bollywoodhungama.com/wp-content/uploads/2021/12/Selena-Gomez-invests-in-15-billion-grocery-delivery-company-Gopuff-1.jpg'
},

{
    name: 'Jennifer Aniston',
    age: '52',
    height: `5'5"`,
    funFact: 'From Sherman Oaks, CA',
    status: 'single. Your mission to marry is a success.',
    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ja3-longform-lead-1544370437.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=640:*'
},

{
    name: 'Jennifer Lopez',
    age: '52',
    height: `5'5"`,
    funFact: 'From The Bronx, NY',
    status: 'single. Your mission to marry is a success.',
    img: 'https://www.lifeandstylemag.com/wp-content/uploads/2016/09/jennifer-lopez.jpg'
},
]
//keeping track of user actions in global variables
let peopleKiiled = [];
let peoppleKissed = [];
let peopleMarried = [];
let numClicked = 0;

//onClick, the game will start
$('#startButton').on('click', function (a) {
    a.preventDefault();
    //take away the title
    $('h1').empty();
    //Empty content of game area
    $('.gameArea').empty();
    //take away the howtoplay intructions 
    $('.howToPlay').empty();
    //call all the function needed for game to happen
    exitButton();
    theProfile(numClicked);
    addGameButtons();
    kissButton();
    killButton();
    marryButton();
});

let exitButtonClass = '#exitButton';
const exitButton = function () {
    //change the start button id to exit button id
    $('#startButton').attr('id', 'exitButton')
    //change start button word to exit
    $('#exitButton').html('Exit');
    //on click it restart the page
    $(exitButtonClass).on('click', function (c) {
        c.preventDefault();
        window.location.reload();
    });
}

// changes the profile display and contents relating to it
const theProfile = function (numClicked) {
    $('.profiles').html(`<h2>${celebrities[numClicked]['name']}</h2><img id = 'theProfileImage' src ="${celebrities[numClicked]['img']}"><p>Fun Fact: ${celebrities[numClicked]['funFact']}</p>`);
}

//create game buttons
const addGameButtons = function () {
    $('.gameButtons').html('<button id="killButton">Kill</button><button id="kissButton">Kiss</button><button id="marryButton">Marry</button>')
}

const killButton = function () {
    $('#killButton').on('click', function (d) {
        d.preventDefault();
        //whenever kill button is click, this check to see if the game comes to and end yet, if so it will bring the end of the game, if not it will continue with the game
        if (numClicked < celebrities.length - 1) {
            peopleKiiled.push(celebrities[numClicked]);
            numClicked += 1;
            theProfile(numClicked);
        } else {
            endResult(numClicked);
        }
    })
};

const kissButton = function () {
    $('#kissButton').on('click', function (e) {
        e.preventDefault();
        //whenever kiss button is click, this check to see if the game comes to and end yet, if so it will bring the end of the game, if not it will continue with the game
        if (numClicked < celebrities.length - 1) {
            peoppleKissed.push(celebrities[numClicked]);
            numClicked += 1;
            theProfile(numClicked);
        } else {
            endResult(numClicked);
        }
    })
}

const marryButton = function () {
    $('#marryButton').on('click', function (f) {
        f.preventDefault();
        //whenever marry button is click, this check to see if the game comes to and end yet, if so it will bring the end of the game, if not it will continue with the game
        if (numClicked < celebrities.length - 1) {
            peopleMarried.push(celebrities[numClicked]);
            marriedProfile();
            numClicked += 1;
            theProfile(numClicked);
        } else {
            endResult(numClicked);
        }
    })
}

//this fuction is resposible placing the person the user choice to marry last at the bottom of the screen as a reminder.
const marriedProfile = function () {
    $('.marry').html(`<img id = 'marryProfile' src="${celebrities[numClicked]['img']}"><p>You are currently trying to marry ${celebrities[numClicked]['name']}.`);
}

const endResult = function (numClicked) {
    //clears out contents of the game
    $('.initial').empty();
    $('.profiles').empty();
    $('.gameButtons').empty();
    $('.marry').empty();
    //input diplay
    $('.endGameResult').html('<h3>Congratulation!</h3>');
    //Display user data during the game
    $('.endGameResult').append(`<p>You have kiss ${peoppleKissed.length} people.</p><p>You have killed ${peopleKiiled.length} people.</p><p>You have attempted to marry ${peopleMarried.length} amount of people.</p>`);
    //display who they choice to marry last and check if it is a success or not
    $('.endGameResult').append(`<div><p>"${peopleMarried[peopleMarried.length-1]['name']}" is ${peopleMarried[peopleMarried.length-1]['status']}</p> <img id = 'marryProfile' src="${peopleMarried[peopleMarried.length-1]['img']}"</img><div>`);
    //Create a restart button to allow user to restart the game
    $('.endGameResult').append(`<button class= 'restartButton'>Restart</button>`)
}

//restart button to allow user to restart the game by refreshing the page
$('.endGameResult').on('click','.restartButton', function (g) {
    g.preventDefault();
    window.location.reload();
})



