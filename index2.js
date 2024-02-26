class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static isSameOwner(pet1, pet2) {
    if (pet1.ownerName === pet2.ownerName) {
      return pet1.petName + " " + "e " + pet2.petName + " hanno lo stesso padrone";
    } else {
      return pet1.petName + " " + "e " + pet2.petName + " non hanno lo stesso padrone";
    }
  }
}

const fuffy = new Pet("Fuffy", "Pietro", "Dog", "Pitbul");
const snuffle = new Pet("Snuffle", "Marianna", "Cat", "Siamese");
const bazar = new Pet("Bazar", "Paolo", "Rabbit", "Silvilago");
const eva = new Pet("Eva", "Innocenzo", "Dog", "Rottweiler");
const rex = new Pet("Rex", "Pietro", "Dog", "Labrador");
const cip = new Pet("Cip", "Paolo", "Bird", "Parot");
const rocky = new Pet("Rocky", "Innocenzo", "Dog", "German sheperd");

console.log(Pet.isSameOwner(fuffy, cip));
console.log(Pet.isSameOwner(eva, rocky));
console.log(Pet.isSameOwner(rex, bazar));
console.log(Pet.isSameOwner(eva, snuffle));
console.log(Pet.isSameOwner(cip, bazar));
console.log(Pet.isSameOwner(eva, fuffy));
console.log(Pet.isSameOwner(cip, rex));
console.log(Pet.isSameOwner(rex, fuffy));

let addName = document.querySelector(".addName");
let addOwner = document.querySelector(".addOwner");
let addSpecies = document.querySelector(".addSpecies");
let addBreed = document.querySelector(".addBreed");
let list = document.querySelector(".list");
let btn = document.querySelector(".btn");

let pets = [];

const container = document.getElementById("container");

container.onsubmit = function (e) {
  e.preventDefault();
  console.log("Animale aggiunto alla lista");
};

const addedList = function () {
  list.innerHTML = "";

  pets.forEach((p) => {
    let li = document.createElement("li");
    li.innerText =
      "Name: " + p.petName + " " + "Owner: " + p.ownerName + " " + "Species: " + p.species + " " + "Breed: " + p.breed;
    list.appendChild(li);
  });
};

btn.onclick = function () {
  let pet = new Pet(addName.value, addOwner.value, addSpecies.value, addBreed.value);
  pets.push(pet);
  addedList();
  addName.value = "";
  addOwner.value = "";
  addSpecies.value = "";
  addBreed.value = "";
};

container.appendChild(list);
