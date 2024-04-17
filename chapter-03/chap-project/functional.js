// Using functional approach to solve clocktime project
// Create functions that give values and manage console
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = (message) => console.log(message);

const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed), arg);
// Next functions for transforming data
// serialize clocktime
const serializeClockTime = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});

// civilian hours
const civilianHours = (clockTime) => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

// Append AM or PM
const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? 'PM' : 'AM',
});

// HOF next display function
const display = (target) => (time) => target(time);
// HOF format clock function
const formatClock = (format) => (time) =>
  format
    .replace('hh', time.hours)
    .replace('mm', time.minutes)
    .replace('ss', time.seconds)
    .replace('tt', time.ampm);
// HOF prepend zero to it
const prependZero = (key) => (clockTime) => ({
  ...clockTime,
  key: clockTime[key] < 10 ? '0' + clockTime[key] : clockTime[key],
});

// Using composition to build a working clock
const convertToCivilianTime = (clockTime) =>
  compose(appendAMPM, civilianHours)(clockTime);

const doubleDigits = (civilianTime) =>
  compose(
    prependZero('hours'),
    prependZero('minutes'),
    prependZero('seconds')
  )(civilianTime);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock('hh:mm:ss tt'),
      display(log)
    ),
    oneSecond()
  );

startTicking();

// advantage of this version
// scalability, testable, reusable, no side effects, maintainability, last there is no global variable outside of functions themselvesv
