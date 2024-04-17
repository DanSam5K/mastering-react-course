// composition is way functions as splited into simple chung accomplishing a specifc task and can be call in series or parallel.

const template = 'hh:mm:ss tt';
const clockTime = template
  .replace('hh', '03')
  .replace('mm', '33')
  .replace('ss', '33')
  .replace('tt', 'PM');

console.log(clockTime);
console.log(template);

// a function composed with difficulty of maintaining and scalability
const both = (date) => appendAMPM(civilianHours(data));
// a more elegant composition for the above function

const both2 = compose(civilianHours, appendAMPM);
both2(new Data());

// compose is HOF
const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed), arg);
