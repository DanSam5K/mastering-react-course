// Destructuring objects
const sandwich = {
  bread: 'dutch crunch',
  meat: 'tuna',
  cheese: 'swiss',
  toppings: ['lettuce', 'tomato', 'mustard'],
};
const { bread, meat } = sandwich;
console.log(bread, meat); // dutch crunch tuna

// Also, we can use destructuring to assign new variable names

const { bread: breadType, meat: meatType } = sandwich;
console.log(breadType, meatType); // dutch crunch tuna

// we can use let and change the variable value
let { bread: breadType2, meat: meatType2 } = sandwich;
breadType2 = 'garlic';
console.log(breadType2, meatType2); // garlic tuna
console.log(sandwich.bread); // dutch crunch

// Destructuring incoming function arguments
// with regular function
const lordify = (person) => {
  console.log(`${person.firstname} of Canterbury`);
};

const regularPerson = {
  firstname: 'John',
  lastname: 'Smith',
};

lordify(regularPerson); // John of Canterbury

// with destructuring
const lordify2 = ({ firstname }) => {
  console.log(`${firstname} of Canterbury`);
};

lordify2(regularPerson); // John of Canterbury

// We can take this on step further
const regularPerson2 = {
  firstname: 'John',
  lastname: 'Smith',
  spouse: {
    firstname: 'Jane',
    lastname: 'Smith',
  },
};

const lordify3 = ({ firstname, spouse: { firstname: spouseName } }) => {
  console.log(`${firstname} and ${spouseName} of Canterbury`);
};

lordify3(regularPerson2); // John and Jane of Canterbury

// Destructuring arrays
