// function declaration

function sayHello() {
  console.log('Hello');
}

sayHello(); // Output: Hello

// function expression
const sayBye = function () {
  console.log('Bye');
};

sayBye(); // Output: Bye

// hoisting or hoisted function declaration while function expression is not
sayHi(); // Output: Hi

function sayHi() {
  console.log('Hi');
}

// sayHello(); // Output: TypeError: sayHello is not a function
// const sayHello = function () {
//   console.log('Hello');
// };

// passing arguments to functions
function output(text) {
  console.log(text);
}

output('Hello there!'); // Output: Hello there!

// Function returning value
function add(x, y) {
  return x + y;
}

console.log(add(2, 4)); // Output: 6

// Function returning function
function greeting() {
  return function () {
    console.log('Hello!');
  };
}

const sayHello2 = greeting();

sayHello2(); // Output: Hello!

// default parameters

function add(x = 2, y = 3) {
  return x + y;
}

console.log(add()); // Output: 5
console.log(add(5)); // Output: 8
console.log(add(5, 6)); // Output: 11

const defaultPerson = {
  name: {
    first: 'John',
    last: 'Doe',
  },
  age: 25,
  activities: ['reading', 'music', 'movies', 'coding'],
};

function logActivity(person = defaultPerson) {
  console.log(
    person.name.first +
      ' is ' +
      person.age +
      ' years old and loves ' +
      person.activities.join(', ')
  );
}

logActivity(); // Output: John is 25 years old and loves reading, music, movies, coding
logActivity({ name: { first: 'Jane', last: 'Doe' }, age: 26 }); // Output: Jane is 26 years old and loves reading, music, movies, coding
