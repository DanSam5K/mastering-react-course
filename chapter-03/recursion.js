// Recursion function
const countdown = (value, fn) => {
  fn(value);
  return value > 0 ? countdown(value - 1, fn) : value;
};

countdown(10, (value) => console.log(value));

// countdown recursion with delay
const countdown2 = (value, fn, delay = 1000) => {
  fn(value);
  return value > 0
    ? setTimeout(() => countdown2(value - 1, fn, delay), delay)
    : value;
};

const log = (value) => console.log(value);
countdown(10, log);

// recursion for searching data structure
const ds = {
  type: 'Person',
  data: {
    gender: 'male',
    info: {
      id: 22,
      fullname: {
        first: 'Dan',
        last: 'Sam',
      },
    },
  },
};

const deepPick = (fields, object = {}) => {
  const [firstItem, ...remaining] = fields.split('.');
  return remaining.length
    ? deepPick(remaining.join('.'), object[firstItem])
    : object[firstItem];
};

console.log(deepPick('type', ds));
console.log(deepPick('data.info.fullname.first', ds));
