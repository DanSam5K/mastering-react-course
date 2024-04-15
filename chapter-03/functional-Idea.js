// We can declare functions with var, let, const
var log = function (message) {
  console.log(message);
};
log('Hello, World!'); // Hello, World!

let log2 = function (message) {
  console.log(message);
};

log2('Hello, World!'); // Hello, World!

const log3 = function (message) {
  console.log(message);
};

log3('Hello, World!'); // Hello, World!

// We can declare functions with arrow functions
const log4 = (message) => {
  console.log(message);
};

log4('Hello, World!'); // Hello, World!

// We can assign functions to variables we can add them to objects
const obj = {
  message: 'They can be added to objects like variables',
  log(message) {
    console.log(message);
  },
};

obj.log(obj.message); // They can be added to objects like variables

// We can add them to arrays
const messages = [
  'They can be inserted into arrays',
  (message) => console.log(message),
  'like variables',
  (message) => console.log(message),
];

messages[1](messages[0]); // They can be inserted into arrays
messages[3](messages[2]); // like variables

// We can pass functions as arguments to other functions
const insideFn = (logger) => {
  logger('They can be sent to other functions as arguments');
};

insideFn((message) => console.log(message)); // They can be sent to other functions as arguments

// We can return functions from other functions
const createScream = function (logger) {
  return function (message) {
    logger(message.toUpperCase() + '!!!');
  };
};

const scream = createScream((message) => console.log(message));

scream('functions can be returned from other functions'); // FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!
scream('createScream returns a function'); // CREATESCREAM RETURNS A FUNCTION!!!
scream('scream invokes that returned function'); // SCREAM INVOKES THAT RETURNED FUNCTION

// with arrow functions
const createScream2 = (logger) => (message) =>
  logger(message.toUpperCase() + '!!!');

const scream2 = createScream2((message) => console.log(message));

scream2('functions can be returned from other functions'); // FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!

// We can store functions in data structures
