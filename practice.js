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


