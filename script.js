entity.status();
const entity = {
  health: 0;
  revive() {
    this.health = 100;
  },
  status() {
    this.revive();
    console.log(this.health);
  }
};

console.log(this);
console.log(this);

entity.status();
const entity = {
  health: 0;
  revive() {
    this.health = 100;
  },
  status() {
    this.revive();
    console.log();
  }
};
