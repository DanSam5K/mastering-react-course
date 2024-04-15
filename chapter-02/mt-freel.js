class Expedition {
  constructor(location, length, gear) {
    this.location = location;
    this.length = length;
    this.gear = gear;
  }

  print() {
    console.log(`${this.location} will take ${this.length} days.`);
    console.log(`Bring your ${this.gear.join(' and your ')}`);
  }
}

export default new Expedition('Mt. Freel', 2, ['water', 'snacks', 'camera']);
