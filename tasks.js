///////////////////////////////DAY 2/////////////////////////////////////////////

////////////////////////////TASK 1 //////////////////////////////////////////
// function isPalindrome(str, caseSensitive) {
//   if (!caseSensitive) {
//     str = str.toLowerCase();
//   }
//   return str === str.split("").reverse().join("");
// }

// let inputString = prompt("Enter string: ");
// let consider = confirm("Do you want to consider case?");

// if (isPalindrome(inputString, consider)) {
//   console.log(" is  palindrome.");
// } else {
//   console.log("is not  palindrome.");
// }

/////////////////////////////////////////////////////////////////////////////////////
// let inputStrings = prompt("Enter a string: ");
// let count = 0;

// for (let i = 0; i < inputStrings.length; i++) {
//   if (inputStrings[i] === "e" || inputStrings[i] === "E") {
//     count++;
//   }
// }

// console.log("The number of 'e' is: " + count);
/////////////////////////////////////////////////////////////////////////////////////////

// function validateEmail(email) {

//     const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailVal.test(email);
// }

// function validateAge(age) {
//     return !isNaN(age) && age >= 18 && age <= 80;
// }

// function readUserInfo() {
//     let name = prompt("Enter your name:");
//     let email = prompt("Enter your email:");
//     let age = prompt("Enter your age:");

//     if (name && validateEmail(email) && validateAge(age)) {
//         return { name: name, email: email, age: age };
//     } else {
//         console.log("Invalid input.");
//         return null;
//     }
// }

// function displayUserInfo(userInfo) {
//     console.log("Welcome, " + userInfo.name );
//     console.log("Your email address is: " + userInfo.email);
//     console.log("Your age is: " + userInfo.age);
// }
// let userInfo = readUserInfo();
// if (userInfo) {
//     displayUserInfo(userInfo);
// }
//////////////////////////////////////TASK 2//////////////////////////////////////////////////////
// let radius = parseFloat(prompt("Enter the radius of the circle:"));

// let area = Math.PI * radius * radius;

// console.log("The area is: " + area);
/////////////////////////////////////////////////////////////////////////////////////////
// let value = parseFloat(
//   prompt("Enter  value :")
// );
// let squareRoot = Math.sqrt(value);
// alert("The square root of " + value + " is: " + squareRoot.toFixed(2));
/////////////////////////////////////////TASK 3/////////////////////////////////////////////
// let array = [];
// for (let i = 0; i < 3; i++) {
//     let input = parseFloat(prompt("Enter element " + (i + 1) + " of the array:"));
//     array.push(input);
// }

// let sum = array[0] + array[1] + array[2];
// let product = array[0] * array[1] * array[2];
// let division = array[0] / array[1] / array[2];

// console.log("Sum: " + sum);
// console.log("Product: " + product);
// console.log("Division: " + division);
/////////////////////////////////////////////////////////////////////////////////////////
// let array = [];
// for (let i = 0; i < 5; i++) {
//     array.push(parseFloat(prompt("Enter element " + (i + 1) + " of the array:")));
// }

// let ascendingOrder = array.slice().sort((a, b) => a - b);

// let descendingOrder = array.slice().sort((a, b) => b - a);

// console.log(" array: " + array.join(", "));
// console.log("Ascending order: " + ascendingOrder.join(", "));
// console.log("Descending order: " + descendingOrder.join(", "));

//////////////////////////////////////////TASK 4/////////////////////////////////////////////
// function myFunction(param1, param2) {
//   if (arguments.length !== 2) {
//     throw new Error(" 2 parameters only.");
//   }
//   return param1 + param2;
// }
//////////////////////////////////////////////////////////////////
// function addValues(...values) {
//   for (let val of values) {
//     if (typeof val !== "number" || isNaN(val)) {
//       throw new Error("All parameters must be numbers.");
//     }
//   }
//   return values.reduce((acc, curr) => acc + curr );
// }

// try {
//   console.log(addValues(1, 2, 3));
//   console.log(addValues(10, "hello", 9));
// } catch (error) {
//   console.error(error.message);
// }
///////////////////////////////////////////////////////////////////////////////
// function reverseParams(...params) {
//     return params.reverse();
// }

// console.log(reverseParams(1, 2, 3));
// console.log(reverseParams("b", "o", "d", "y"));
