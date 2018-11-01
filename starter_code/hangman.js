//var hangman;

// function Hangman() {

// }

// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


//document.onkeydown = function (e) {

//};


class Hangman {
  constructor(){
    let words = ['Ironman', 'Wolverine', 'Thanos', 'Spiderman', 'Travis', 'Thor', 'Hulk'];
    let secretWord = [];
    let letters = [];
    let guessedLetters = '';
    let errorsLeft = 10;
  }
  getWord(){
    let word = Math.floor(Math.random() * words.length)
    console.log(words[word])
    secretWord.push(words[word])
    console.log(secretWord)
  }

  checkIfLetter(e){
    console.log("==============", e.key)
    this.letters.push(e.key)
    //console.log(letters)
    if(Number(e.which) >= 64 && Number(e.which) <= 91){
      return true
  
      } else {
        
        alert('REFERENCE ERROR: CANNOT COMPUTE \n LETTERS ONLY')
        return false
       
      
         
       }
  }
  
  
  
  
}

document.onkeydown = function onKey(e){
  hangman.checkIfLetter(e)

}





