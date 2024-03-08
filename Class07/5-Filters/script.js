function showAnimals(animal) {
  let animalsChoice = document.querySelectorAll(`.${animal}`);
  animalsChoice.forEach((animalChoice) => {
    animalChoice.classList.add("is-visible");
  });
}
function hideAnimals(animal) {
  console.log(`hide ${animal}s`);
  let animalsChoice = document.querySelectorAll(`.${animal}`);

  animalsChoice.forEach((animalChoice) => {
    animalChoice.classList.remove("is-visible");
  });
}


const checkboxCats = document.querySelector("#cats");
checkboxCats.addEventListener("click", () => {
  if ((checkboxCats.checked) == false) {
    hideAnimals("cat");
  } else {
    showAnimals("cat");
  }
});


const checkboxDogs = document.querySelector("#dogs");
checkboxDogs.addEventListener("click", () => {
  if ((checkboxDogs.checked) == false) {
    hideAnimals("dog");
  } else {
    showAnimals("dog");
  }
});