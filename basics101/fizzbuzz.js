let fizzbuzz = function(numOne){
    if (numOne % 3 === 0 && numOne % 5 ===0){
      return 'fizzbuzz';
 }  
    else if (numOne % 3 === 0){
      return 'fizz';
 }  
    if (numOne % 5 ===0){
       return 'buzz'; 
    }
    else {console.log(numOne)}
 }


let result = fizzbuzz(30);
console.log(result);