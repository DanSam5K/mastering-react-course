// lets consider impure functions first
// impure functions
const frederick = {
  name: 'Frederick Douglass',
  canRead: false,
  canWrite: false,
};

function selfEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;
  return frederick;
}

selfEducate();
console.log(frederick); // { name: 'Frederick Douglass', canRead: true, canWrite: true }

//  even if it takes it arguments and returns a value, it still has side effects
//  because it changes the state of an object outside of its scope
const frederick2 = {
  name: 'Frederick Douglass',
  canRead: false,
  canWrite: false,
};

const selfEducate2 = (person) => {
  person.canRead = true;
  person.canWrite = true;
  return person;
};

selfEducate2(frederick2);
console.log(frederick2); // { name: 'Frederick Douglass', canRead: true, canWrite: true }

//  pure functions
const frederick3 = {
  name: 'Frederick Douglass',
  canRead: false,
  canWrite: false,
};

const selfEducate3 = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});

console.log(selfEducate3(frederick3)); // { name: 'Frederick Douglass', canRead: true, canWrite: true }
console.log(frederick3); // { name: 'Frederick Douglass', canRead: false, canWrite: false }

// impure function that mutates the DOM
function Header(text) {
  let h1 = document.createElement('h1');
  h1.innerText = text;
  document.body.appendChild(h1);
}

Header('Header() caused side effects');

// pure function that returns a new DOM element
const Header2 = (text) => {
  let h1 = document.createElement('h1');
  h1.innerText = text;
  return h1;
};

document.body.appendChild(Header2('Header2() has no side effects'));

const Header3 = (props) => React.createElement('h1', null, props.message);

// Pure function take in at least one argument
// Pure return a value or another function
// Pure functions do not change the state of the application
