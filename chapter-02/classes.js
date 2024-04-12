// prototypical inheritance to create a class

function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + ' | ' + this.length + ' days');
};

const maui = new Vacation('Maui', 7);
maui.print(); // Output: Maui | 7 days

// ES2015 classes introduced in ECMAScript 6
class Vacation2 {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    console.log(`${this.destination} will take ${this.length} days.`);
  }
}

const trip = new Vacation2('Santiago, Chile', 7);
trip.print(); // Output: Santiago, Chile will take 7 days.

// use vacation as abstract class to create a subclass

class Expedition extends Vacation2 {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }

  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(' and your ')}`);
  }
}

const trip2 = new Expedition('Mt. Whitney', 3, [
  'sunglasses',
  'prayer flags',
  'camera',
]);
trip2.print();
// Output: Mt. Whitney will take 3 days.
// Bring your sunglasses and your prayer flags and your camera
