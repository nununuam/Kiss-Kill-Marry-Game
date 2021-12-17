
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
console.log(celebrities.length);


let peopleKiiled = [];
let peoppleKissed = [];
let peopleMarried = [];
let singlePeople = [];

let numClicked = 0;

$('div').on('click','#howToPlayButton', function (b) {
    b.preventDefault();

    $('.gameArea').html('<p class ="instruction">Every turn you will get a profile. You get to pick if you want to kiss kill or marry them by clicking the button. You have certain amount of time allocated before the game end. The time allocated is randomize. Who every you choose to marry at the end of the game will reveal if you actually ended up marrying them. Remember, whoever you choose to marry last at the end of the round is who you will see if it works out.</p>');
});


//WebPage section:
$('#startButton').on('click', function (a) {
    a.preventDefault();
    console.log(celebrities.length);


    //take away the howtoplay intructions
    $('h1').empty();
    $('.gameArea').empty();
    $('.howToPlay').empty();

    console.log('yay');
    exitButton();

    //gameContinue();
    theProfile(numClicked);
    console.log();
    addGameButtons();

    kissButton();
    killButton();
    marryButton();

    
    
});



//let gameContinue = function () {}

let exitButtonClass = '#exitButton';
const exitButton = function () {
    $('#startButton').attr('id', 'exitButton')
    $('#exitButton').html('Exit');
    $(exitButtonClass).on('click', function (c) {
        c.preventDefault();
        console.log('exit button works')
        window.location.reload();
    });

}

const theProfile = function (numClicked) {
    console.log(numClicked)
    $('.profiles').html(`<img id = 'theProfileImage' src ="${celebrities[numClicked]['img']}">`);

}
const addGameButtons = function () {
    $('.gameButtons').html('<button id="killButton">Kill</button><button id="kissButton">Kiss</button><button id="marryButton">Marry</button>')
}

const killButton = function () {
    $('#killButton').on('click', function (d) {
        d.preventDefault();
        if (numClicked < celebrities.length - 1) {

            console.log('hi')
            peopleKiiled.push(celebrities[numClicked]);
            console.log(peopleKiiled);
            
            console.log(celebrities[numClicked]['name']);
            console.log('killButton works')
            numClicked += 1;
            console.log(numClicked);
            theProfile(numClicked);
        } else {

            console.log('its working');
            endResult(numClicked);
        }

    })
};

const kissButton = function () {
    $('#kissButton').on('click', function (e) {
        e.preventDefault();
        if (numClicked < celebrities.length - 1) {
            peoppleKissed.push(celebrities[numClicked]);
            console.log(peoppleKissed);
            console.log('kissButton works')
            numClicked += 1;
            console.log(numClicked);
            theProfile(numClicked);
        } else {

            console.log('its working');
            endResult(numClicked);
        }

    })
}

const marryButton = function () {

    $('#marryButton').on('click', function (f) {

        f.preventDefault();
        if (numClicked < celebrities.length - 1) {
            peopleMarried.push(celebrities[numClicked]);
            console.log(peopleMarried);
            marriedProfile();
            console.log('marryButton woks')
            numClicked += 1;

            console.log(numClicked);
            theProfile(numClicked);
        } else {

            console.log('its working');
            endResult(numClicked);
        }
    })
}

const marriedProfile = function () {
    $('.marry').html(`<img id = 'marryProfile' src="${celebrities[numClicked]['img']}"><p>You are currently trying to marry ${celebrities[numClicked]['name']}.`);
}

const endResult = function (numClicked) {
    $('.initial').empty();
    $('.profiles').empty();
    $('.gameButtons').empty();
    $('.marry').empty();

    console.log(numClicked);

    $('.endGameResult').html('<h3>Congratulation</h3>');

    $('.endGameResult').append(`<p>You have kiss ${peoppleKissed.length} people.</p><p>You have killed ${peopleKiiled.length} people.</p><p>You have attempted to marry ${peopleMarried.length} amount of people.</p>`);

    $('.endGameResult').append(`<div><p>"${peopleMarried[peopleMarried.length-1]['name']}" is ${peopleMarried[peopleMarried.length-1]['status']}</p> <img id = 'marryProfile' src="${peopleMarried[peopleMarried.length-1]['img']}"</img><div>`);

    $('.endGameResult').append(`<button class= 'restartButton'>Restart</button>`)

}

const successfullyMarried = function(){
    if (peopleMarried[peopleMarried.length-1]['status'] = 'single'){
        return (`${peopleMarried[peopleMarried.length-1]['status']}. The union is a fail`)
    }else{
        return (`${peopleMarried[peopleMarried.length-1]['status']}. The union is a success.`)
    }
    
}

    $('.endGameResult').on('click','.restartButton', function (g) {
        console.log('restarting')
        g.preventDefault();
        window.location.reload();
    })



