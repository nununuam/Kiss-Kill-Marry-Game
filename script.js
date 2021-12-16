
const celebrities= [{name:'Benedict Cumberbatch', 
                        age:'45', 
                        height:`6'0"`, 
                        funFact:'Play Sherlock', 
                        status:'married', 
                        img:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMDEwMDE1MDUyNjM3NTQ0/cumberbatch_179663904jpg.jpg'},

                    {name:'Chris Hemsworth', 
                        age:'38', 
                        height:`6'3"`, 
                        funFact:'Australian', 
                        status:'married',
                        img:'https://www.the-sun.com/wp-content/uploads/sites/6/2021/05/c81b7b96-3fea-47b0-bc67-c695c75f0a95.jpg' },

                    {name:'Will Smith', 
                        age:'53', 
                        height:`6'2"`, 
                        funFact:"Can solve Rubik's Cube in 55 seconds", 
                        status:'married', 
                        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0tz9q7U2dVBL6qqp-A-WDMyktyZSAJdavwiUcGEB7YkXYwo0p2E3BYAGVbhMcywT6b4&usqp=CAU' },

                    {name:'Selena Gomez', 
                        age:'29', 
                        height:`5'5"`, 
                        funFact:'Play Gianna on Barney', 
                        status:'single', 
                        img:'https://www.bollywoodhungama.com/wp-content/uploads/2021/12/Selena-Gomez-invests-in-15-billion-grocery-delivery-company-Gopuff-1.jpg' },

                    {name:'Jennifer Aniston', 
                        age:'52', 
                        height:`5'5"`, 
                        funFact:'From Sherman Oaks, CA', 
                        status:'single', 
                        img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ja3-longform-lead-1544370437.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=640:*' },

                    {name:'Jennifer Lopez', 
                        age:'52', 
                        height:`5'5"`, 
                        funFact:'From The Bronx, NY', 
                        status:'single',
                        img:'https://www.lifeandstylemag.com/wp-content/uploads/2016/09/jennifer-lopez.jpg' },
]



let peopleKiiled = [];
let peoppleKissed = [];
let peopleMarried = [];

let indexNum = 0;





//WebPage section:
$('#startButton').on('click', function(a){
    a.preventDefault();
    console.log(celebrities.length);

    if (indexNum < celebrities.length){
    //take away the howtoplay intructions
    $('.gameArea').empty();

    console.log('yay');
    exitButton();
    
    gameContinue();
    theProfile(indexNum);
    console.log();
    addGameButtons();
    
    kissButton();
    killButton();
    marryButton();
    }
    else{
        $('.initial').empty();
        $('.profiles').empty();
        $('gameButtons').empty();
        
        
    }
    endResult();
    
});



$('#howToPlayButton').on('click', function(b){
    b.preventDefault();

    $('.gameArea').html('<p class ="instruction">Every turn you will get a profile. You get to pick if you want to kiss kill or marry them by clicking the button. You have certain amount of time allocated before the game end. The time allocated is randomize. Who every you choose to marry at the end of the game will reveal if you actually ended up marrying them. Remember, whoever you choose to marry last at the end of the round is who you will see if it works out.</p>');
});



let gameContinue = function(){

}

let exitButtonClass = '#exitButton';
const exitButton = function(){
    $('#startButton').attr('id', 'exitButton')
    $('#exitButton').html('Exit');
    $(exitButtonClass).on('click', function(c){
        c.preventDefault();
        console.log('exit button works')
    });
    
}

const theProfile = function(indexNum){
    $('.profiles').html(`<img id = 'theProfileImage' src ="${celebrities[indexNum]['img']}">`);
}
const addGameButtons = function(){
    $('.gameButtons').html('<button id="killButton">Kill</button><button id="kissButton">Kiss</button><button id="marryButton">Marry</button>')
}

const killButton= function(){
    $('#killButton').on('click', function(d){
        d.preventDefault();

        peopleKiiled.push(celebrities[indexNum]['name']);
        console.log(peopleKiiled);
        console.log(celebrities[indexNum]['name']);

        console.log('killButton works')
        indexNum += 1;
    
        console.log(indexNum);
        theProfile(indexNum);
    })
};

const kissButton = function(){
    $('#kissButton').on('click', function(e){
        e.preventDefault();
        peoppleKissed.push(celebrities[indexNum]['name']);
        console.log(peoppleKissed);
        console.log('kissButton works')
        indexNum += 1;
        console.log(indexNum);
        theProfile(indexNum);
    })
}

const marryButton = function(){
    $('#marryButton').on('click', function(f){
        f.preventDefault();
        peopleMarried.push(celebrities[indexNum]['name']);
        console.log(peopleMarried);
        marriedProfile();
        console.log('marryButton woks')
        indexNum += 1;
        console.log(indexNum);
        theProfile(indexNum);
    })
}

const marriedProfile = function(){
    $('.marry').html(`<img id = 'marryProfile' src="${celebrities[indexNum]['img']}"><p>You are currently trying to marry ${celebrities[indexNum]['name']}.`);
}

const endResult = function(){
    $('.endGameResult').html('<h3>Game Over</h3>');
    $('.endGameResult').append(`<p>1</p><p>2</p><p>3</p>`);
    $('.endGameResult').append(`<div><p> "${celebrities[indexNum]['name']}"</p> <img id = 'marryProfile' src="${celebrities[indexNum]['img']}"</img></div>`);
}


