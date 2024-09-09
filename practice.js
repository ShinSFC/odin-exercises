// function greetPeople() {
//     let greetingMessage = "Good Morning!";
//     console.log(greetingMessage);
// }

// greetPeople();
// console.log(greetingMessage);






// let output = document.querySelector('.output');
// output.innerHTML = '';

// for (let i = 10; i > 0; i--) {
	
// 	const para = document.createElement('p');
	
// 	if (i == 10) { 
// 		para.textContent = 'Countdown 10';
// 		output.appendChild(para);
// 	} else if ( i == 0) {
// 		para.textContent = "Blast off!";
// 		output.appendChild(para);
// 	} else {
// 		para.textContent = i;
// 		output.appendChild(para);
// 	}
// }






// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)}
// }

// for (let i = 0; i < 3; i++) {
//     console.log(`number ${i}!`);
// }

// let i = 0

// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }






// function getNumber() {
//     return prompt('Enter a number greater than 100?')
// }

// let number = getNumber()

// while (number <= 100 && number) { // && number is required for cancel button to function
//     console.log(number);
//     number = getNumber();
// }

// console.log(number)



// Output prime numbers

// function findPrimeNumber() {
//     let num = prompt("Enter a number: ");
//     console.log(`You entered: ${num}`);
//     if (num >= 2) console.log(2);
//     if (num >= 3) console.log(3);
      
//     for (let i = 1; num > i; i++) {
//         console.log((6 * i) - i)
//         console.log((6 * i) + i)
//     }
// }

// findPrimeNumber()

// const repeatString = function(string, num) {
//     if (num > 0) {
//         return string.repeat(num);
//     } else if (num < 0) {
//         return 'ERROR';
//     } else if (num == 0) {
//         return '';
//     }
// }

// // Do not edit below this line
// module.exports = repeatString;

// const reverseString = function(string) {
//     console.log(string.slice.reverse)
// }

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("Hello World");
// });

// function alertFunction() {
//     alert("Yay! You did it!");
// }

// btn.addEventListener("click", alertFunction);

// user = {}
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;



// let schedule = {
//     //hello: 'hi'
// }
 
// function isEmpty(obj) {
    // for (key in obj);
    //     if (typeof key == 'string') {
//             console.log('false');
//         } else {
//             console.log('true');
//         }
// }

// isEmpty(schedule);


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;

// let addSalaries = function(obj) {
//     for (const [key, value] of Object.entries(obj)) {
//         console.log(value);
//         sum += value;
//     };
// };

// addSalaries(salaries);

// book solution
// for (let key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
// }

// function multiplyNumeric(obj) {
//     for (key in obj) {
//         if (typeof obj[key] != 'string') { obj[key] = obj[key] * 2; }
//     }
// }

// multiplyNumeric(menu);

// for (key in menu) {
//     console.log(menu[key]);
// }

// if the element is an even number triple it then add it to the accumulator

// my solution
// function sumOfTripledEvens(array) {
//     let sum = 0;
//     array.reduce((total, element) => {
//         if (element % 2 == 0) {
//             element *= 3; 
//         sum += element;
//         }
//     });
//     return sum;
// }

// book solution
// function sumOfTripledEvens(array) {
//   return array
//     .filter((num) => num % 2 === 0)
//     .map((num) => num * 3)
//     .reduce((acc, curr) => acc + curr);
// }


// console.log(sumOfTripledEvens([1, 2, 3, 4]))


// my solution:
// function camelize(str) {
//   let arr = str.split('-');
//   // arr = arr.filter((item) => item != '');
//   let firstWord = arr[0].toString().toLowerCase(); // this is 1st word
//   arr.shift(); // arr now has 1st element removed
//   // console.log(arr);
//   let capArr = arr.map((word) => {
//     word = word.split('');
//     let firstLetter = word[0].toUpperCase();
//     word.shift();
//     word.unshift(firstLetter);
//     word = word.join('');
//     return word;
//     // console.log(word); // here all words are now capitalized but arr
//   });
  
//   capArr.unshift(firstWord); // this works 
//   let result = capArr.join('');
//   return result;
//   // console.log(result) // arr out here is still lower case
// }

// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

// book solution:
// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }


// my solution for filter range
// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//   return arr
//     .filter((num) => num >= a)
//     .filter((num) => num <= b);
// }

// let filtered = filterRange(arr, 1, 4);

// alert(filtered);
// alert(arr);


//book solution
// function filterRange(arr, a, b) {
//   // added brackets around the expression for better readability
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)


// my solution for filter range in place
// it looks like it satisfies the assignment but will not pass the sandbox's first test
// let arr = [5, 3, 8, 1];

// function that removes elements between a and b 
// function filterRangeInPlace(array, a, b) {
//   if (a < b) {
//     arr = array.filter((num) => num >= a && num <= b);
//   } else {
//     arr = array.filter((num) => num >= b && num <= a);
//   }
// }

// filterRangeInPlace(arr, 4, 1);
// console.log(arr);
// alert(arr);

// book solution passes the sandbox test
// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // remove if outside of the interval
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// my solution for sort in decreasing order
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => a - b);
// arr.reverse()  

// alert(arr)

// book solution
// arr.sort((a, b) => b - a);

// Copy and sort array
// my solution

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//     let copy = arr.filter(word => word);
//     copy.sort();
//     return copy;
// }

// let sorted = copySorted(arr);  

// alert(sorted);
// alert(arr);

// book solution
// function copySorted(arr) {
//   return arr.slice().sort(); // uses slice() to make a copy
// }

// Map to names
// my solution
// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 28};

// let users = [john, pete, mary];
// console.log(users[1].name);

// let names = [users[0].name, users[1].name, users[2].name];

// alert(names);

// book solution
// let names = users.map(item => item.name);

// Map to objects
// my solution
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map(item => {
//     return {
//     fullName: item.name + ' ' + item.surname,
//     id: item.id
//     }});

// console.log(usersMapped);
// alert(usersMapped[0].id);
// alert(usersMapped[0].fullName);

// book solution
// let usersMapped = users.map(user => {
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// });

// Sort users by age

// my solution also book solution is identical
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// let sortByAge = function(arr) {
//     arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);

// Shuffle an array
// my solution // doesn't work completely. 1st element can only be 1 or 3, 2nd element can only be 2 or 3, 3rd element can be 1, 2 or 3
//let arr = [1, 2, 3];

// function shuffle(arr) {
//     let currentIndex = arr.length;
//     while (currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * currentIndex);
//         console.log(randomIndex);
//         currentIndex--;
//         [arr[currentIndex], arr[randomIndex]] = [
//             arr[randomIndex], arr[currentIndex]];
//         return arr;
//     }
// }

// book solution:
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }


// shuffle(arr);
// console.log(arr);

// Get average age
// my solution
// input
// - array of objects
// output
// - single number which is the average of age property
// examples
// data structures
// - values inside objects
// - array
// - numbers
// algorithm
// - loop and:
//  - access age values
//  - add up all age values/ divide by number of elements
// - return average age


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr) {
//     let ageTotal = 0;
//     for ( user of arr ) {
//         ageTotal += user.age;
//     }
//     return ageTotal / arr.length;
// }

// console.log(getAverageAge(arr));
// alert( getAverageAge(arr) );

// book solution
// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// Filter unique array numbers
// input
// - array of strings
// output
// - array where each element is unique 
// data structures
// - array of strings
// - strings
// algorithm
// - function that takes an array as an argument
// - iterates through the array and 
// - returns an array where each element is unique
// - or deletes any repeats
// - if else statement?

// function unique(arr) {
//     return [...new Set(arr)];  // advanced way. can also use includes()
// }

// let strings = [ "Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-0"
// ];

// alert( unique(strings) );


// Create keyed object from array
// my solution
// input
// - array
// output
// - object
// data structures
// - array
// - object
// algorithm
// - iterate through array
// - accumulate elements into a single object

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann' , name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
    let obj = {};
    arr.reduce((accumulator, element) => {
        accumulator[element.id] = element;
        return accumulator;
    }, obj);
    return obj;
}

let usersById = groupById(users);
console.log(usersById);