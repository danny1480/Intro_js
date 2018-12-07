let randomNumber = Math.floor(Math.random() * 6 ) + 1;
console.log(randomNumber)


let guessNum = 4;
let makeGuess = function anyNum (){


if (guessNum === randomNumber ) {
   return true;
  
}  
   else return false;


};

console.log(makeGuess(4));