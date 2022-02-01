
    
    
    const game = {
      title: 'Guess the Number!',
      biggestNum: 100,
      smallestNum: 1,
      secretNum: null,
      prevGuesses:[],
      
      
      getGuess: function(){
        let guess

        //prompts the player to pick a number. 
        //how would i tell it to respond NaN if the player enters a non int character
        while(isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum){ 
          guess = prompt( `Enter a guess between ${this.biggestNum} and ${this.smallestNum}!`)
          //turns string into int
          guess = parseInt(guess)
        }
        ///could I prompt the guess? 
        return guess
      },   
      
      //         if (guess < this.secretNum){ alert ("you're too low")
      //   }else if (guess > this.secretNum){alert("you're too high!!")
      // }else {alert ('NaN')//}
      
      
      
      
      play: function() {
        //let guess = this.getGuess

        //selects a random number between 1 and 100
        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
       
        //while the prev guess does not equal the secret num, push the current guess to to prev guess
        while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum){
          this.prevGuesses.push(this.getGuess())
          console.log(this.prevGuesses);
          
          
          ///something weird happening here
          // if(this.prevGuesses[this.prevGuesses - 1] < this.secretNum){
            //   this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
            
            // }else if((this.prevGuesses[this.prevGuesses - 1] > this.secretNum)){
              //   this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1]
              
              // }
              
              
              
              
              
              
              //calls the render function from within the play method
              
              this.render();
            }
            
          },
          
          
          
          
          render: function(){ 
            if(this.prevGuesses[this.prevGuesses.length - 1]=== this. secretNum){
              alert('congratulations! Youre a winner')
            }
            if(this.prevGuesses[this.prevGuesses.length - 1 ] < this.secretNum){ 
              alert('Youre too low, sonny')
            }else if
            (this.prevGuesses[this.prevGuesses.length - 1 ] > this.secretNum)
            {
              alert('too high,sonny')
              
  }
}
}
game.play()
console.log('hello')





///you need to render a guess count function that takes the current guess and compares it to the mystery number. If the guess isn't a number or is outside the guess range, then keep running the get guess function. This is similar to the get guesses function, but its purpose is to either stop the loop or keep the loop running       



// getGuess: function(){ 
  // let gettingGuess = true
  // let input = null 
  // guess = parseInt() 
  
  // return `Enter a guess between ${this.smallestNum} and ${this.biggestNum} `
  
  
  //use while loop 
  //while (input != secretNum) { add to previous guesses and contrinue the game
  //}
  //
  //if (input == this.SecretNum) {return "congrats! its a match!" and end play loop
  // } else if(input > this.secretNum) { return "you're too high muf'k"
  // } else if(input < this.secretNum) {return "you're too low muf'k"
  // } else { return 'this answer is invalid' 
  
  
  //  }
  
  
  // }

//-----old get guess


///this.prevGuesses.push(guess)///problem 



//-----old render function that didn't work
//  render: function(){
    //     let daGuess = this.getGuess()
    //     if (daGuess === this.secretNum){
    //       return "Congrats!! You're a Winner!!!"//enter temp.literals
    //     }else{  return "Not Quite =( Guess again"
    //   }
    // }}

    //--------- old play function
    
    
      // play: function() {
      //       //let guess = this.getGuess
            
      //       this.secretNum = Math.floor(Math.random() * 
      //       (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      //       console.log(this.secretNum)
      //       this.getGuess()
      //       console.log(this.prevGuesses)
      //       this.render()
            
      //       if (this.guess === this.secretNum){
      //         return ```The computer guessed ${this.secretNum} and you guessed ${this.guess}. Congratulations!! You're a winner!!!```
      //         } else if(this.guess !== this.secretNum){
      //           return 'not quite'
      //         ///this.prevGuesses.push(this.guess)
      //       } 
      //       if (this.guess > this.secretNum){
      //         return 'youre too high sonny'
              
      //       }else{(this.guess < this.secretNum)
      //           return 'youre too low sonny'
        
      //         }},

///--------old render function 
      
    //  render: function(){
    //     let daGuess = this.getGuess()
    //     if (daGuess === this.secretNum){
    //       return "Congrats!! You're a Winner!!!"//enter temp.literals
    //     }else{  return "Not Quite =( Guess again"
    //   }
    // }}