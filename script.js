//'use strict';

// // Check if the initial orientation is portrait
// if (window.matchMedia("(orientation: portrait)").matches) {
//     alert("For the best experience, please rotate your device to landscape mode.");
//   }
  
//   // Listen for orientation change events
//   window.addEventListener("orientationchange", function() {
//     // Check if the new orientation is portrait
//     if (window.matchMedia("(orientation: portrait)").matches) {
//       alert("For the best experience, please rotate your device to landscape mode.");
//     }
//   });


// Check if the screen width is less than 785 pixels
if (window.innerWidth < 900) {
    // Show an alert to prompt the user to rotate the device
    alert("For the best experience, please rotate your device to landscape mode.");
  } else {
    // Show the content if the width is greater than or equal to 360 pixels
    document.body.style.display = "block";
    // document.write("Hello, world!")
  }


// // Get the screen width
// let screenWidth = window.screen.width;

// // Check if the screen width is 360
// if (screenWidth == 360) {
//   // Try to lock the orientation to landscape
//   try {
//     screen.orientation.lock('landscape');
//   } catch (error) {
//     // Handle the error
//     console.error(error);
//   }
// }




var scores, roundScore, activePlayer, dice, gamePlaying;


init()



document.querySelector('.btn--roll').addEventListener('click', function(){

    if( gamePlaying ){
        // 1.Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;    
    } else {
        //Next player        
        nextPlayer()
    }
    }
});


document.querySelector('.btn--hold').addEventListener('click', function(){

    if( gamePlaying ){

//Add CURRENT score to GLOBAL score
scores[activePlayer] += roundScore;

//Update the UI
document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

//Check if player won the game
if (scores[activePlayer] >= 20){
    document.querySelector('#name--' + activePlayer).textContent = 'Winner !';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player--' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player--' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
} else {
    //Next player
    nextPlayer();
}

    }
})


document.querySelector('.btn--hold').addEventListener('click', function(){
    
    if( gamePlaying ){

        //Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]

    //Check if player won the game
    if(scores[activePlayer] >= 20){
        document.querySelector('#name--' + activePlayer).textContent = 'Winner !'
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player--' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player--' + activePlayer + '-panel').classList.remove('active');


    } else {
        //Next player
        nextPlayer()
    }

    }
})


function nextPlayer(){
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0-panel').classList.toggle('player--active');
    document.querySelector('.player--1-panel').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none'; 
}


document.querySelector('.btn--new').addEventListener('click', init) 

function init(){

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
document.querySelector('.player--0-panel').classList.remove('winner');
document.querySelector('.player--1-panel').classList.remove('winner');
document.querySelector('.player--0-panel').classList.remove('active');
document.querySelector('.player--1-panel').classList.remove('active');
document.querySelector('.player--0-panel').classList.add('active');

}
// var x = document.querySelector('#score--0').textContent;
// console.log(x);