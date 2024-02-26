class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static ageCompair(ageA, ageB) {
    if (ageA.age > ageB.age) {
      return ageA.firstName + " " + ageA.lastName + " " + "è più grande di " + ageB.firstName + " " + ageB.lastName;
    } else if (ageA.age === ageB.age) {
      return (
        ageA.firstName +
        " " +
        ageA.lastName +
        " " +
        "e " +
        ageB.firstName +
        " " +
        ageB.lastName +
        " " +
        "hanno la stessa età"
      );
    } else {
      return ageA.firstName + " " + ageA.lastName + " " + "è più piccolo di " + ageB.firstName + " " + ageB.lastName;
    }
  }
}

const marco = new User("Marco", "Bianchi", 25, "Milan");
const luca = new User("Luca", "Trapattoni", 45, "Rome");
const innocenzo = new User("Innocenzo", "Merola", 21, "Maddaloni");
const michele = new User("Michele", "Rossi", 52, "Naples");
const paolo = new User("Paolo", "Giuliani", 45, "Torino");
const alessia = new User("Alessia", "Preti", 18, "Bologna");
const francesca = new User("Francesca", "Sebastiani", 21, "Rome");

// console.log(marco);
// console.log(luca);
// console.log(innocenzo);
// console.log(michele);
// console.log(paolo);
// console.log(alessia);
// console.log(francesca);

console.log(User.ageCompair(marco, luca));
console.log(User.ageCompair(marco, alessia));
console.log(User.ageCompair(innocenzo, francesca));
console.log(User.ageCompair(paolo, michele));
console.log(User.ageCompair(michele, innocenzo));
console.log(User.ageCompair(luca, paolo));
