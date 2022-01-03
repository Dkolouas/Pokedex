let pokemonRepository = (function() {
  let pokemonList = [{
      name: 'Bulbasaur',
      height: 0.7,
      type: ['grass', 'poison']
    },
    {
      name: 'Charmander',
      height: 0.6,
      type: ['fire']
    },
    {
      name: 'Squirtle',
      height: 0.5,
      type: ['water']
    },
    {
      name: 'Arbok',
      height: 3.5,
      type: ['Poison']
    }
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let pokemonItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    pokemonItem.appendChild(button);
    pokemonList.appendChild(pokemonItem);
    //event
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }
  //event trigures
  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
//adds pokemon to the list
pokemonRepository.add({
  name: "Pikachu",
  height: 0.3,
  types: ["electric"]
});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});