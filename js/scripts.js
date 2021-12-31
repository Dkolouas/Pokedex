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
// this loop allows the atributes to display on the DOM
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' (height: ' +
    pokemonList[i].height + ', type: ' + pokemonList[i].type + ')')
  // this adds a conditional for the height
  if (pokemonList[i].height > 1.5) {
    document.write(' Wow, that’s big!')
  }
  // adds a break after each loop
  document.write('<br>')

}