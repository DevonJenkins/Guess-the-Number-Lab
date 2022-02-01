
  ///you need to render a guess count function that takes the current guess and compares it to the mystery number. If the guess isn't a number or is outside the guess range, then keep running the get guess function. This is similar to the get guesses function, but its purpose is to either stop the loop or keep the loop running       
  
  //this function is similar to the one (currently in pseudocode) above play, but the purpose is to get the guess, compare it to the mysteryNum 
  
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
    
    
    const game = {
      title: 'Guess the Number!',
      biggestNum: 100,
      smallestNum: 1,
      secretNum: null,
      prevGuesses:[],
      guess: null,
      
      getGuess: function(){
        let guess 
        while(isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum){
            guess = prompt('guess a number...[insert templ literals]' )
            guess = parseInt(guess);
        } 
          return guess
          },
    
          
      


      play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      while(this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum){
        this.prevGuesses.push(this.getGuess());
        
        if(this.prevGuesses.push(this.getGuess()) ){
            this.biggestNum =this.prevGuesses[this.prevGuesses.length-1]
        } else { 
          this.biggestNum =this.prevGuesses[this.prevGuesses.length-1]

        }

        console.log(this.prevGuesses)
      }
  } ,
  
          


    render: function(){ 
      if(this.prevGuesses[this.prevGuesses.length - 1]=== this. secretNum){
        alert('congrats! Youre a winner')
      }
      if(this.prevGuesses[this.prevGuesses.length - 1 ] < this.secretNum){ 
        alert('too low')
      }else{
        (this.prevGuesses[this.prevGuesses.length - 1 ] > this.secretNum)
        alert('too high')
    
  }
}
    }
  game.play()
  console.log('hello')
  
  console.log(game.secretNum)  
  


//-----old get guess
    // getGuess: function(){
      //   let 
      //   guess = prompt( `Enter a guess between ${this.biggestNum} and ${this.smallestNum}!`)
      //   guess = parseInt(guess)
      //   this.prevGuesses.push(guess)

      //       while(guess != this.secretNum)
      //       { 
      //         if (guess < this.secretNum){ alert ("you're too low")
      //   }else if (guess > this.secretNum){alert("you're too high!!")
      // }else {alert ('NaN')//}
      //     }}},   

    



      //-----old render function that didn't work
      //  render: function(){
    //     let daGuess = this.getGuess()
    //     if (daGuess === this.secretNum){
    //       return "Congrats!! You're a Winner!!!"//enter temp.literals
    //     }else{  return "Not Quite =( Guess again"
    //   }
    // }}

              
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


      
    //  render: function(){
    //     let daGuess = this.getGuess()
    //     if (daGuess === this.secretNum){
    //       return "Congrats!! You're a Winner!!!"//enter temp.literals
    //     }else{  return "Not Quite =( Guess again"
    //   }
    // }}