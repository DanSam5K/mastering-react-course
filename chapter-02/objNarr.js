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
const [firstMountain] = ['Freel', 'Rose', 'Tallac', 'Rubicon'];
console.log(firstMountain); // Freel

// pass unnecessary values
const [, secondMountain] = ['Freel', 'Rose', 'Tallac', 'Rubicon'];
console.log(secondMountain); // Rose

// Object literal enhancement
const name1 = 'Tallac';
const elevation = 9738;
// old way
const print = function () {
  console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
};
const funHike = { name1, elevation, print };
console.log(funHike); // { name: 'Tallac', elevation: 9738 }
console.log(funHike.print()); // Mt. Tallac is 9738 feet tall

// Shorthand method names
const skier = {
  name: 'John',
  sound: 'yodel',
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed(mph) {
    this.speed = mph;
    console.log('speed:', mph);
  },
};

skier.powderYell(); // YODEL YODEL YODEL!!!

// Computed property names
const hiker = {
  [name1]: elevation,
};
console.log(hiker); // { Tallac: 9738 }

// Spread operator
const lakes = ['Donner', 'Marlette', 'Fallen Leaf', 'Cascade'];
const [first, ...rest] = lakes;
console.log(rest); // [ 'Marlette', 'Fallen Leaf', 'Cascade' ]

// Spread operator with objects
const morning = {
  breakfast: 'oatmeal',
  lunch: 'peanut butter and jelly',
};
const dinner = 'mac and cheese';
const backpackingMeals = {
  ...morning,
  dinner,
};
console.log(backpackingMeals); // { breakfast: 'oatmeal', lunch: 'peanut butter and jelly', dinner: 'mac and cheese' }

// Spread operator with functions
const evening = {
  dinner: 'mac and cheese',
};
const backpackingMeals2 = {
  ...morning,
  ...evening,
};

console.log(backpackingMeals2); // { breakfast: 'oatmeal', lunch: 'peanut butter and jelly', dinner: 'mac and cheese' }

// use spread operator to collect function arguments
const print2 = (...items) => {
  console.log(items);
};

print2('a', 'b', 'c'); // [ 'a', 'b', 'c' ]

// Rest parameters
const numbers = (...nums) => {
  console.log(nums);
};

numbers(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]

// Rest parameters with destructuring
const sum = (...numbers) => {
  return numbers.reduce((acc, number) => acc + number, 0);
};

console.log(sum(1, 2, 3, 4, 5)); // 15
