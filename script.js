




//Replace the buttons when click start game
const replaceStartButton = function (){
    ('#startButton').on('click', function(){

    });
}


$('#startButton').on('click', function(a){
    a.preventDefault();
    //take away the howtoplay intructions
    $('.gameArea').empty();

    console.log('yay');
  
    $('#startButton').attr('id', 'exitButton')
    $('#exitButton').html('Exit');
    exitButton();
    theProfile();
    addGameButtons();


    
});


$('#howToPlayButton').on('click', function(b){
    b.preventDefault();

    $('.gameArea').html('<p class ="instruction">Every turn you will get a profile. You get to pick if you want to kiss kill or marry them by clicking the button. You have certain amount of time allocated before the game end. The time allocated is randomize. Who every you choose to marry at the end of the game will reveal if you actually ended up marrying them. Remember, whoever you choose to marry last at the end of the round is who you will see if it works out.</p>');
});

const exitButton = function(){
    $('#exitButton').on('click', function(){
        console.log('exit button works')
    });
    
}

const theProfile = function(){
    $('.gameArea').html(`<img id = 'theProfileImage' src ="https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898__340.jpg">`);
}
const addGameButtons = function(){
    $('.gameArea').append('<button id="killButton">Kill</button><button id="kissButton">Kiss</button><button id="marryButton">Marry</button>')
}
const marriedProfile = function(){
    $('.marry').html(`<img id = 'marryProfile' src="https://cdn.pixabay.com/photo/2018/05/21/04/21/animal-3417350__480.jpg"`);
}
const endResult = function(){
    $('.endGameResult').append(`<p>1</p><p>2</p><p>3</p>`);
}
