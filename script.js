




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
