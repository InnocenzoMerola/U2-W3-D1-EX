const pets = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static isSameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

const formNode = document.querySelector("#container");
formNode.onsubmit = function (e) {
  e.preventDefault();
  console.log("Animale aggiunto alla lista");

  const addName = document.querySelector(".addName").value;
  const addOwner = document.querySelector(".addOwner").value;
  const addSpecies = document.querySelector(".addSpecies").value;
  const addBreed = document.querySelector(".addBreed").value;
  const list = document.querySelector(".list");
  const btn = document.querySelector("#btn");
  const center = document.querySelector("#center");

  const pet = new Pet(addName, addOwner, addSpecies, addBreed);
  console.log(pet);
  pets.push(pet);
  console.log(pets);

  const li = document.createElement("li");
  li.textContent =
    "Name: " +
    pet.petName +
    "; " +
    " " +
    "Owner: " +
    pet.ownerName +
    "; " +
    " " +
    "Species: " +
    pet.species +
    "; " +
    " " +
    "Breed: " +
    pet.breed;
  list.appendChild(li);

  const addedList = function () {
    const btnDel = document.createElement("button");
    btnDel.classList.add("trashBtn");
    btnDel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>`;
    li.appendChild(btnDel);
    btnDel.addEventListener("click", deleteLi);

    function deleteLi(e) {
      const shoppingCart = e.currentTarget.parentElement;
      list.removeChild(shoppingCart);
    }
  };
  addedList();

  document.querySelector(".addName").value = "";
  document.querySelector(".addOwner").value = "";
  document.querySelector(".addSpecies").value = "";
  document.querySelector(".addBreed").value = "";
};
