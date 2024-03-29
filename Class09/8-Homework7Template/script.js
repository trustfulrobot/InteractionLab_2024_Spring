let demoPokemon = {};

const pokemonLinks = document.querySelectorAll(".pokemon-link");
const pokemonContainer = document.querySelector("#pokemon-container");

// let's max out number of possibilities to 1000
const totalPokemon = 999;
const randomInteger = Math.floor(Math.random() * totalPokemon);

const apiURL = `https://pokeapi.co/api/v2/pokemon/${randomInteger}`;

fetch(apiURL).then(response => {
  return response.json();
})
.then(response => {  
  
  // console.log("demoResponse: ", response);
  demoPokemon.name = response.name;
  demoPokemon.abilities = response.abilities;
  demoPokemon.forms = response.forms;
  demoPokemon.moves = response.moves;
  
  // display demo links & content
  let pokeDOM = `
    <div class="pokemon">
      <h2>
        Name: ${demoPokemon.name.charAt(0).toUpperCase() + demoPokemon.name.slice(1)}
      </h2>`;
  
     
  // add list of abilities
  // console.log(demoPokemon.abilities);
  pokeDOM += `<h3>Abilities:</h3>
      <ul class="abilities">`;
  demoPokemon.abilities.forEach((ability,index) => {
    pokeDOM += `<li>${demoPokemon.abilities[index].ability.name}</li>`;
  });
  // close out abilities ul
  pokeDOM += `</ul>`;
  
  // add list of moves
  // console.log(demoPokemon.moves);
  pokeDOM += `
      <h3>Moves:</h3>
      <ul class="moves">`;
  demoPokemon.moves.forEach((move,index) => {
    pokeDOM += `<li>${demoPokemon.moves[index].move.name}</li>`;
  });
  // close out moves ul
  pokeDOM += `</ul>`;
  
  // finish up pokeDOM
  pokeDOM += `</div>`;
  
  // add pokeDOM to pokemonContainer
  pokemonContainer.innerHTML = pokeDOM;
})
.catch(error => {
  console.error(error);
});