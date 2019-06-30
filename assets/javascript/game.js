//the specific letter that the user typed
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z",];

var wins = 0;
var losses = 0;
var guessLeft = 9;
var letterUser = [];
var eachofLetters = null;

//computerGuess variable equal to a random choice
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function farUserGuesses() {
    document.querySelector("#letter").innerHTML = "your Guesses So far: " + letterUser.join(' ');

}

countGuessLeft();
var restart = function() {
    guessLeft = 9;
    letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math,random() * computerChoices.lenght)];

}
//when user guesses a key
document.onkeyup = function(event) {
    guessLeft--;

 var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


 letterUser.push(userGuess) 
 countGuessLeft();
 farUserGuesses();

 if (userGuess === computerGuess) {
     wins++;
     documentquerySelector("wins").innerHTML = "Wins" + wins;
     restart();
 }

 else if (guessesLeft === 0){
     losses++;
     document.querySelector("loser").innerHTML = "Loses" + losses;
     restart()
 }
};
