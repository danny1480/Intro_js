let toDos = [
    'wake up',
    'have breakfast',
    'go to work',
    'do homework',
    'come back home'
];
console.log(('you have to do: '+(toDos.length) + ' jobs'));

let first = toDos[0];
let secondLast = toDos[3];

let pos = 1;
let removedItem = toDos.splice(pos, 2);
let newItem = toDos.push('cook dinner');
let removeFirst = toDos.shift();
console.log(toDos);



//Assignment #1
//Create and array with five todos 
//You have x todos (use length)
//Print the first and second to last items 

//Assignment #2
// Delete the 3rd item 
// Add a new item onto the end 
// Remove the first item from the list 