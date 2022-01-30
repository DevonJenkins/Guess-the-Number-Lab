const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  previousGuesses:[],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },



  getGuess: function(){ 
  let gettingGuess = true
  let input = null 
   //use while loop 
   //while (playerGuess != secretNum) { add to previous guesses and contrinue the game
     //}
     //
//if (guess == SecretNum) {return "congrats! its a match!" 
// } else if(guess > secretNum) { return "you're too high muf'k"
// } else if(guess < secretNum) {return "you're too low muf'k"
// } else { return 'this answer is invalid' 


 //  }
    
    return `Enter a guess between ${this.smallestNum} and ${this.biggestNum} `

  }
}


console.log(game.getGuess())