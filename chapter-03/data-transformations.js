// Functions to master to be proficient with functional js
// 1. join - to combine arrays
const schools = ['Yorktown', 'Washington & Lee', 'Wakefield'];
console.log(schools.join(', ')); // Yorktown, Washington & Lee, Wakefield

// 2. filter - to select data
const wSchools = schools.filter((school) => school[0] === 'W');
console.log(wSchools); // [ 'Washington & Lee', 'Wakefield' ]
console.log(schools); // [ 'Yorktown', 'Washington & Lee', 'Wakefield' ]

const cutSchool = (cut, list) => list.filter((school) => school !== cut);
console.log(cutSchool('Washington & Lee', schools).join(', ')); // Yorktown, Wakefield
console.log(schools.join(', ')); // Yorktown, Washington & Lee, Wakefield

// 3. map - to transform data
const highSchools = schools.map((school) => `${school} High School`);

console.log(highSchools.join(', ')); // Yorktown High School, Washington & Lee High School, Wakefield High School
console.log(schools.join(', ')); // Yorktown, Washington & Lee, Wakefield
// produce array of object from array of strings using map
const schoolsObj = schools.map((school) => ({ name: school }));
console.log(schoolsObj); // [ { name: 'Yorktown' }, { name: 'Washington & Lee' }, { name: 'Wakefield' } ]
// create pure function that changes one object from array of objects
const editName = (oldName, name, arr) =>
  arr.map((item) => {
    if (item.name === oldName) {
      return {
        ...item,
        name,
      };
    } else {
      return item;
    }
  });

// shorthand for above function
const editName2 = (oldName, name, arr) =>
  arr.map((item) => (item.name === oldName ? { ...item, name } : item));

const schoolsObj2 = editName('Washington & Lee', 'W-L', schoolsObj);
console.log(schoolsObj2); // [ { name: 'Yorktown' }, { name: 'W-L' }, { name: 'Wakefield' } ]
console.log(schoolsObj); // [ { name: 'Yorktown' }, { name: 'Washington & Lee' }, { name: 'Wakefield' } ]

// change arrays into objects
const school2 = {
  Yorktown: 10,
  'Washington & Lee': 2,
  Wakefield: 5,
};

const schoolArray = Object.keys(school2).map((key) => ({
  name: key,
  wins: school2[key],
}));

console.log(schoolArray); // [ { name: 'Yorktown', wins: 10 }, { name: 'Washington & Lee', wins: 2 }, { name: 'Wakefield', wins: 5 } ]

// 4. reduce - to reduce data to a single value
const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => (age > max ? age : max), 0);
console.log(maxAge); // 64

const colors = ['red', 'red', 'green', 'blue', 'green'];
const colorCount = colors.reduce((count, color) => {
  count[color] = (count[color] || 0) + 1;
  return count;
}, {});

console.log(colorCount); // { red: 2, green: 2, blue: 1 }

// 5. Array reduceRight - to reduce data from right to left
const colors2 = [
  {
    id: 'xekare',
    title: 'rad red',
    rating: 3,
  },
  {
    id: 'jbwsof',
    title: 'big blue',
    rating: 2,
  },
  {
    id: 'prigbj',
    title: 'grizzly grey',
    rating: 5,
  },
  {
    id: 'ryhbhsl',
    title: 'banana',
    rating: 1,
  },
];

const hashColors = colors2.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(hashColors);

// we can laso transform array into different array
const colors3 = ['red', 'red', 'green', 'blue', 'green'];
const uniqueColors = colors.reduce(
  (unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color],
  []
);

console.log(uniqueColors);
console.log(colors3.indexOf(colors3[1]));
