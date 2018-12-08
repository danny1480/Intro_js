//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// console.log(days.length);
// console.log(days[days.length - 1]);

// const numbers = [3, 4];

// //End
// numbers.push(5, 6);

// //Begining 
// numbers.unshift(1, 2);

// //Middle
// numbers.splice(2, 0, 77, 88)
// console.log(numbers);

// // //Returns index of the element if it exsits
// console.log(numbers.indexOf(1));

// // //Starts looking for element from second argument index
// //console.log(numbers.indexOf(1, ));

// // // //returns index of last occurance of the element value
//  console.log(numbers.lastIndexOf(1));

// // // //Returns true instead -1 if element is found 
// // console.log(numbers.indexOf(1) !== 1);

// // // //Return true if element is found in a array 
//  console.log(numbers.includes(1));

// Finding Refrence
const students = [
    { id: 1, name: 'mohammad' },
    { id: 2, name: 'jack' }
];

const student = students.find(function(student) {
    return student.name === 'jack';
});

console.log(student);
