// Before const and let all we had was var

var pizza = 'Deep Dish';
pizza = 'Pepperoni';
console.log(pizza); // Output: Pepperoni

// const value can't be reset
const pizza2 = 'Deep Dish';
pizza2 = 'Pepperoni'; // Output: TypeError: Assignment to constant variable.

// Js now have lexical variable scope
//  we create code block with curly braces {}
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

for (var i = 0; i < 5; i++) {
  console.log(i); // Output: 0 1 2 3 4
}
console.log(i); // Output: 5

// use let instead of var to declare the variable inside the loop to keep the variable scope within the loop
for (let j = 0; j < 5; j++) {
  console.log(j); // Output: 0 1 2 3 4
}
console.log(j); // Output: ReferenceError: j is not defined
