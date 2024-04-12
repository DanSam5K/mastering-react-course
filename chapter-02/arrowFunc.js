// Arrow functions
const add = (x, y) => x + y;

console.log(add(2, 4)); // Output: 6

const lordify = (firstName, land) => `${firstName} of ${land}`;

console.log(lordify('Ned', 'North')); // Output: Ned of North

// Arrow function with no arguments
const lordify2 = () => `The Lord of the Rings`;

console.log(lordify2()); // Output: The Lord of the Rings

// Arrow function with single argument
const lordify3 = (firstName) => `${firstName} of North`;

console.log(lordify3('Arya')); // Output: Arya of North

// Arrow function with multiple arguments
const lordify4 = (firstName, land) => {
  if (!firstName) {
    throw new Error('A firstName is required to lordify');
  }

  if (!land) {
    throw new Error('A lord must have a land');
  }

  return `${firstName} of ${land}`;
};

console.log(lordify4('Jon', 'Castle Black')); // Output: Jon of Castle Black
// console.log(lordify4('Sansa')); // Output: Error: A lord must have a land

// Returning an object

const lordify5 = (firstName, land) => ({ firstName, land });

console.log(lordify5('Sansa', 'Winterfell')); // Output: { firstName: 'Sansa', land: 'Winterfell' }

// Arrow functions scope
const tahoe = {
  mountains: ['Freel', 'Rose', 'Tallac', 'Rubicon'],
  myPrint: function (delay = 1000) {
    // this.mountains is not accessible here
    setTimeout(function () {
      console.log(this.mountains.join(', '));
    }, delay);
  },
};

tahoe.myPrint(); // Output: Uncaught TypeError: Cannot read property 'join' of undefined

// To fix the above issue, we can use arrow function
const tahoe2 = {
  mountains: ['Freel', 'Rose', 'Tallac', 'Rubicon'],
  myPrint: function (delay = 1000) {
    setTimeout(() => {
      console.log(this.mountains.join(', '));
    }, delay);
  },
};
