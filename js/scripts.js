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

// added function 'forEach()' allows the atributes to display on the DOM
function printPokemonList(pokemonList) {
  pokemonList.forEach(function(pokemon) {
    // this adds condition for the height
    if (pokemon.height > 1.5) {
      document.write('<p>' + pokemon.name + ' (height: ' +
        pokemon.height + ', type: ' + pokemon.type + ')' + ' - Wow, that’s big!' + '</p>')
    }
    // or else this is executed if condition not met
    else {
      document.write('<p>' + pokemon.name + ' (height: ' +
        pokemon.height + ', type: ' + pokemon.type + ')' + '</p>')
    }
  })
}

printPokemonList(pokemonList)