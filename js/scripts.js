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
  // this adds condition for the height
  if (pokemonList[i].height > 1.5) {
    document.write('<p>' + pokemonList[i].name + ' (height: ' +
      pokemonList[i].height + ', type: ' + pokemonList[i].type + ')' + ' - Wow, that’s big!' + '</p>')
  }
  // or else this is executed if condition not met
  else {
    document.write('<p>' + pokemonList[i].name + ' (height: ' +
      pokemonList[i].height + ', type: ' + pokemonList[i].type + ')' + '</p>')
  }

}