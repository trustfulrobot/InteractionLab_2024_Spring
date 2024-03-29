const pokemonContainer = document.querySelector('#pokemon-container');

async function fetchPokemon() {
  console.log("go");
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const data = await response.json();
  pokemonContainer.innerHTML = "This Pokemon's name is " + data.species.name;
}

fetchPokemon();