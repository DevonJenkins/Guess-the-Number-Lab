


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
  
  

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      console.log(this.secretNum);
      
      while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) {
        this.prevGuesses.push(this.getGuess())
        console.log(this.prevGuesses);
        if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
          this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
        }else{
          this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1]
        }
        this.render();
        
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
game.play()  




