// immutability
const numbers = [1, 2, 3, 4, 5];
const add = (a, b) => a + b;
const sum = numbers.reduce(add, 0);
console.log(sum); // 15
console.log(numbers); // [1, 2, 3, 4, 5]

// Mutating objects
let color_lawn = {
  title: 'lawn',
  color: '#00FF00',
  rating: 0,
};

function rateColor(color, rating) {
  color.rating = rating;
  return color;
}

console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 5

// Immutable objects
let color_sky = {
  title: 'sky',
  color: '#0000FF',
  rating: 0,
};

const rateColor2 = (color, rating) => {
  return Object.assign({}, color, { rating: rating });
};

console.log(rateColor2(color_sky, 5).rating); // 5
console.log(color_sky.rating); // 0

// Immutable objects with ES6
const rateColor3 = (color, rating) => ({
  ...color,
  rating,
});

console.log(rateColor3(color_sky, 5).rating); // 5
console.log(color_sky.rating); // 0

// Immutable arrays
const list = [{ title: 'Rad Red' }, { title: 'Lawn' }, { title: 'Party Pink' }];

// using array methods like push
const addColor = (title, colors) => {
  colors.push({ title });
  return colors;
};

console.log(addColor('Glam Green', list).length); // 4
console.log(list.length); // 4

// using array methods like concat
const addColor2 = (title, colors) => colors.concat({ title });

console.log(addColor2('Glam Green', list).length); // 4
console.log(list.length); // 3

// using array methods spread operator
const addColor3 = (title, colors) => [...colors, { title }];
