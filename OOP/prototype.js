console.log("ES6 classes and inheritance");

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  CalcAge() {
    console.log(2037 - this.birthYear);
  }
}

const anil = new PersonCl("Anita", 1991);
console.log(anil);
anil.CalcAge();

PersonCl.prototype.hello = function () {
  console.log(`how are you Mrs ${this.firstName}`);
};
anil.hello();
