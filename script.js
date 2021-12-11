$('#startButton').on('click', function(){
    $('.gameArea').empty();
    console.log('yay');
});

$('#howToPlayButton').on('click', function(){
    $('.gameArea').html('<p class ="instruction">Every turn you will get a profile. You get to pick if you want to kiss kill or marry them by clicking the button. You have certain amount of time allocated before the game end. The time allocated is randomize. Who every you choose to marry at the end of the game will reveal if you actually ended up marrying them. Remember, whoever you choose to marry last at the end of the round is who you will see if it works out.</p>');
});