//declare global variables//
///////////////////////////

// variables of the letters to guess
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//the player's score or nuimber of correct guesses
var wins = 0;
//computer's score or number of times you fail to guess correctly before the tries runs out
var losses = 0;
// number of guesses you have to start and will count down
var guessesLeft = 9;
// this array will hold the letters you've already guessed
var guessedLetters = [];

// computer randomly chooses a letter
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);

/////////////////////////////////////
//things we need to do (functions)//
///////////////////////////////////

//prints the nmber of gueses left onto the DOM guesses start with 9
var updateGuessesLeft = function(){
  document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};
//
var updateLetterToGuess = function() {
  this.letterToGuess = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
console.log(letterToGuess);
};
//this will take the letters the player pressed and put in on the DOM and separate them with a comma and a space
var updateAlreadyGuessed = function() {
  document.querySelector("#guessedLetters").innerHTML = "Your guesses so far: " + guessedLetters.join(", ");
};

// when the game is over and resets, we want the win loss count to stay so we have to reset the rest of the variables so we need to call these fucntions
var reset = function (){
  // the number of guess back to 9 and empty out the letters used array
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateAlreadyGuessed();
  updateGuessesLeft();
}

updateLetterToGuess();
updateGuessesLeft();

/////////////////////
//playing the game//
///////////////////

//you have to listen for what keystroke the player presses
document.onkeyup = function(event){
  //when a letter is selected, the first thing is the guesses you have left goes down by one
  guessesLeft--;
  //captures the keystroke that the user presses and converts it to lowercase
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  //this pushes the user entry into the array of the variable guussedLetters which will then be displayed in the DOM
  guessedLetters.push(userGuess);
  //call the functions to update how many guesses we have left and the Letters we've already guess in the DOM
  updateGuessesLeft();
  updateAlreadyGuessed();

    //conditions as to whether you win or lose.//
    if (guessesLeft > 0) {
      if (userGuess === letterToGuess){
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        alert("Well done Medium Rhea");
        reset();

      }

    } else if (guessesLeft === 0){
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        alert("I guess you're not psychic");
        reset();
    }




};
