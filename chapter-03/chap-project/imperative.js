// log clock time every second
setInterval(logClockTime, 1000);

function logClockTime() {
  // Get time string as civilian time
  let time = getClockTime();

  // clear the console and log the time
  console.clear();
  console.log(time);
}

function getClockTime() {
  // get the current time
  let date = new Date();
  let clockTime = '';

  // serialzie clock time
  clockTime = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: 'AM',
  };
  // Convert to civilian time
  if (clockTime.hours == 12) {
    clockTime.ampm = 'PM';
  } else if (clockTime.hours > 12) {
    clockTime.ampm = 'PM';
    clockTime.hours -= 12;
  }

  // Prepend 0 when hours is single digit
  if (clockTime.hours < 10) {
    clockTime.hours = '0' + clockTime.hours;
  }

  // Prepend 0 when minutes is single digit
  if (clockTime.minutes < 10) {
    clockTime.minutes = '0' + clockTime.minutes;
  }
  // Prepend 0 when seconds is single digit
  if (clockTime.seconds < 10) {
    clockTime.seconds = '0' + clockTime.seconds;
  }

  return `${clockTime.hours} : ${clockTime.minutes} : ${clockTime.seconds} ${clockTime.ampm}`;
}
