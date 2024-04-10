// Declaring Variable
// using var key word
var pizza = 'Deep Dish';
pizza = 'Pepperoni';
console.log(pizza); // Output: Pepperoni

// const value can't be reset
// const pizza2 = 'Deep Dish';
// pizza2 = 'Pepperoni';
// console.log(pizza2); // Output: TypeError: Assignment to constant variable.

// Js now have lexical variable scope
//  we create code block with curly braces {}
//  and variable declared inside the block is only accessible within the block these curly braces block of the scope of the variable declared with var
// On the other hand, consider if/esle statements
//  the variable declared with var is accessible outside the if/else block
var topic = 'JavaScript';
if (topic) {
  var topic = 'I am inside the block';
}
console.log(topic); // Output: I am inside the block

// But with let and const, the variable declared inside the block is only accessible within the block
let topic2 = 'JavaScript';
if (topic2) {
  let topic2 = 'I am inside the block';
}
console.log(topic2); // Output: JavaScript

// Another area where curly don't block variable scope is with loops
//  variable declared with var inside the loop is accessible outside the loop
for (var i = 0; i < 5; i++) {
  console.log(i); // Output: 0 1 2 3 4
}
console.log(i); // Output: 5
// use let instead of var to declare the variable inside the loop to keep the variable scope within the loop
for (let j = 0; j < 5; j++) {
  console.log(j); // Output: 0 1 2 3 4
}
// console.log(j); // Output: ReferenceError: j is not defined
