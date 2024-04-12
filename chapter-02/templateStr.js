// Traditional string concatenation
var name1 = 'John';
var age = 25;
var sentence = 'My name is ' + name1 + ' and I am ' + age + ' years old.';
console.log(sentence); // Output: My name is John and I am 25 years old.

// Template strings
var name2 = 'Jane';
var age2 = 26;
var sentence2 = 'My name is ' + name2 + ' and I am ' + age2 + ' years old.';

console.log(sentence2); // Output: My name is Jane and I am 26 years old.

// Using template strings
var name3 = 'John';
var age3 = 25;
var sentence3 = `My name is ${name3} and I am ${age3} years old.`;
console.log(sentence3); // Output: My name is John and I am 25 years old.

// Template strings can be used for multiple lines
var sentence4 = `My name is ${name3} and I am ${age3} years old.
I really like JavaScript.`;
console.log(sentence4);
// Output:	My name is John and I am 25 years old.
// 			I really like JavaScript.

// Template strings can be used for HTML
const markup = `
<div>
  <h1>${name3}</h1>
  <p>${age3}</p>
  <p>I really like JavaScript.</p>
</div>`;
console.log(markup);
// Output: <div> <h1>John</h1> <p>25</p> <p>I really like JavaScript.</p> </div>

// Template strings can also be used for expressions
var a = 10;
var b = 10;
console.log(`JavaScript first appeared ${a + b} years ago.`); // Output: JavaScript first appeared 20 years ago.

// Template strings can be used for functions
function foo() {
  return 'bar';
}
console.log(`What is a foo? ${foo()}`); // Output: What is a foo? bar
