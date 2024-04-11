// Declaring Variable
// using var key word
// var pizza = 'Deep Dish';
// pizza = 'Pepperoni';
// console.log(pizza); // Output: Pepperoni

// const value can't be reset
// const pizza2 = 'Deep Dish';
// pizza2 = 'Pepperoni';
// console.log(pizza2); // Output: TypeError: Assignment to constant variable.

// Js now have lexical variable scope
//  we create code block with curly braces {}
//  and variable declared inside the block is only accessible within the block these curly braces block of the scope of the variable declared with var
// On the other hand, consider if/esle statements
//  the variable declared with var is accessible outside the if/else block
// var topic = 'JavaScript';
// if (topic) {
//   var topic = 'I am inside the block';
// }
// console.log(topic); // Output: I am inside the block

// But with let and const, the variable declared inside the block is only accessible within the block
// let topic2 = 'JavaScript';
// if (topic2) {
//   let topic2 = 'I am inside the block';
// }
// console.log(topic2); // Output: JavaScript

// Another area where curly don't block variable scope is with loops
//  variable declared with var inside the loop is accessible outside the loop
// for (var i = 0; i < 5; i++) {
//   console.log(i); // Output: 0 1 2 3 4
// }
// console.log(i); // Output: 5
// use let instead of var to declare the variable inside the loop to keep the variable scope within the loop
// for (let j = 0; j < 5; j++) {
//   console.log(j); // Output: 0 1 2 3 4
// }
// console.log(j); // Output: ReferenceError: j is not defined

// Hoisting
//  JavaScript hoists variable declarations to the top of the scope
//  but not the variable initialization
// console.log(pizza3); // Output: undefined
// var pizza3 = 'Deep Dish';

// console.log(pizza4); // Output: ReferenceError: Cannot access 'pizza4' before initialization

// Destructuring
//  Destructuring is a way to unpack values from arrays or properties from objects into distinct variables
//  Destructuring uses similar syntax as array literals and object literals
// const point = [10, 25, -34];
// const [x, y, z] = point;
// console.log(x, y, z); // Output: 10 25 -34

// const gemstone = {
//   type: 'quartz',
//   color: 'rose',
//   carat: 21.29
// };
// const {type, color, carat} = gemstone;
// console.log(type, color, carat); // Output: quartz rose 21.29

// Object Literal Shorthand
//  ES6 introduces a new notation for instantly creating properties from variables
// const type = 'quartz';
// const color = 'rose';
// const carat = 21.29;
// const gemstone2 = {type, color, carat};
// console.log(gemstone2); // Output: {type: 'quartz', color: 'rose', carat: 21.29}

// Object Literal Shorthand with Methods
//  ES6 also introduces a new shorthand method syntax
// const gemstone3 = {
//   type,
//   color,
//   carat,
//   calculateWorth() {
//     // will calculate worth of gemstone based on type, color, and carat
//   }
// };
// console.log(gemstone3); // Output: {type: 'quartz', color: 'rose', carat: 21.29, calculateWorth: f}

// Iterating with for...of
//  ES6 introduces a new way to iterate over an array
//  for...of loop
// const digits = [0, 1, 2, 3];
// for (const digit of digits) {
//   console.log(digit);
// }
// Output:
// 0
// 1
// 2

// Spread Operator
//  ES6 introduces the spread operator, which looks like this: ...
//  The spread operator pulls out all elements of an array and gives you a standalone list of them
// const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
// console.log(...books);
// Output: Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities

// function directions(...args) {
//   let [start, ...remaining] = args;
//   let [finish, ...stops] = remaining.reverse();
//   console.log(`Drive through ${args.length} towns`);
//   console.log(`Start in ${start}`);
//   console.log(`The destination is ${finish}`);
//   console.log(`Stopping ${stops.length} times in between`);
// }
// directions('Truckee', 'Tahoe City', 'Sunnyside', 'Homewood', 'Tahoma');
// Output: Drive through 5 towns
// Start in Truckee
// The destination is Tahoma
// Stopping 3 times in between

// asynchronous js
//  JavaScript is synchronous and single-threaded
//  This means that it will execute your code block by order after hoisting
//  However, there are ways to get around this
//  Asynchronous JavaScript enables you to write more efficient code
//  by allowing multiple processes to be executed at the same time
//  without blocking other processes
//  This can be done with callbacks, promises, and async/await

// Callbacks
//  A callback function is a function passed into another function as an argument
//  which is then invoked inside the outer function to complete some kind of routine or action
// function getData(data, callback) {
//   setTimeout(() => {
//     console.log('Reading data from the database...');
//     callback({ data: data });
//   }, 2000);
// }
// getData({ name: 'John Doe', age: 34 }, (data) => {
//   console.log(data);
// });
// Output:
// Reading data from the database...
// { name: 'John Doe', age: 34 }

// Promises
//  A promise is an object that may produce a single value sometime in the future
// 	either a resolved value or a reason that it's not resolved
//  A promise may be in one of 3 possible states: fulfilled, rejected, or pending
//  Promise is a built-in JavaScript object
//  that represents the eventual completion (or failure) of an asynchronous operation
//  and its resulting value
//  A promise is in one of these states:
//  - pending: initial state, neither fulfilled nor rejected
//  - fulfilled: meaning that the operation completed successfully
//  - rejected: meaning that the operation failed
//  Once a promise is fulfilled or rejected, it is immutable
//  A promise is created using the Promise constructor
//  A promise is settled if it is not pending
//  A promise is settled if it is fulfilled or rejected
//  Once settled, a promise can not be resettled
//  Promises are chainable
//  Promises have a .then() method, which you can use to chain multiple promises together
//  The catch() method is called when a promise is rejected
//  The finally() method is called when a promise is settled, regardless of its outcome
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('got the user');
    resolve({ user: 'ed' });
  }, 2000);
});
promise.then((user) => {
  console.log(user);
});
// Output: got the user
// { user: 'ed' }

// Async/Await
//  Async/await is a new way to write asynchronous code
//  that is more readable and easier to write than promises
//  Async functions always return a promise
//  If the function throws an error, the promise will be rejected
//  If the function returns a value, the promise will be resolved
//  Async/await is built on top of promises
//  It cannot be used with plain callbacks or node callbacks
//  The async keyword is used to write asynchronous functions
//  The await keyword is used to wait for a promise to resolve or reject
//  Await can only be used inside an async function
//  Async functions can contain zero or more await expressions
//  Await expressions suspend progress through an async function
//  waiting for the passed promise to be resolved
//  The resolved value of the promise is then returned by the await expression
//  If the promise is rejected, the await expression throws the rejected value
//  Await is non-blocking
//  It pauses the execution of the async function
//  until the promise is settled

// async function getUser() {
//   return
//   {
//     user
//   }
// }
// getUser().then((user) => {
//   console.log(user);
// });
// Output: undefined

console.log(fetch('https://jsonplaceholder.typicode.com/posts/1'));
// Output: Promise { <pending> }
console.log(fetch('https://api.randomuser.me/?nat=US&results=1'));
