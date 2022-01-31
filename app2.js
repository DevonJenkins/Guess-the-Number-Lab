


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],



  getGuess: function(){
let guess 
while(isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum){
    guess = prompt('guess a number...[insert templ literals]' )
    guess = parseInt(guess);
} 
  return guess
  },
  
  console.log(secretNum),

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
  },
      

render: function(){ 
  if(this.prevGuesses[this.prevGuesses.length-1]=== this. secretNum){
    alert('congrats! Youre a winner')
  }
  if(this.prevGuesses[this.prevGuesses.length - 1 ] < this.secretNum){ 
    alert('too low')
  }else{
    (this.prevGuesses[this.prevGuesses.length - 1 ] > this.secretNum)
    alert('too high')

  

}


},

}
console.log(game.play)
//game.play()  





