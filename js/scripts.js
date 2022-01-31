let pokemonRepository = (function () {
  //list of pokemon Array
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=300';
  //let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
      if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "detailsUrl" in pokemon
      ) {
          pokemonList.push(pokemon);
      } else {
          console.log("pokemon is not correct");
      }
  }
  function getAll() {
    return pokemonList;
}
function addListItem(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    let $row = $(".row");

    let $card = $('<div class="card" style="width:400px"></div>');
    let $image = $(
      '<img class="card-img-top" alt="Card image" style="width:40%" />'
    );
    $image.attr("src", pokemon.imageUrlFront);
    let $cardBody = $('<div class="card-body"></div>');
    let $cardTitle = $("<h4 class='card-title' >" + pokemon.name + "</h4>");
    let $seeProfile = $(
      '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">See Profile</button>'
    );

    $row.append($card);
    //Append the image to each card
    $card.append($image);
    $card.append($cardBody);
    $cardBody.append($cardTitle);
    $cardBody.append($seeProfile);

    $seeProfile.on("click", function (event) {
      showDetails(pokemon);
    });
  });
}
function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    console.log(pokemon);
    showModal(pokemon);
  });
}
function loadList() {
  return $.ajax(apiUrl)
    .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
        
      });
    })
    .catch(function (e) {
      console.error(e);
    });
}

function loadDetails(pokemon) {
  let url = pokemon.detailsUrl;
  return $.ajax(url)
    .then(function (details) {
      
      pokemon.imageUrlFront = details.sprites.front_default;
      pokemon.imageUrlBack = details.sprites.back_default;
      pokemon.height = details.height;
      
      pokemon.types = [];
      for (let i = 0; i < details.types.length; i++) {
        pokemon.types.push(details.types[i].type.name);
      }
      
      pokemon.abilities = [];
      for (let i = 0; i < details.abilities.length; i++) {
        pokemon.abilities.push(details.abilities[i].ability.name);
      }

      pokemon.weight = details.weight;
    })
    .catch(function (e) {
      console.error(e);
    });
}
// show the modal content
function showModal(pokemon) {
  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");
  let modalHeader = $(".modal-header");
  
  modalTitle.empty();
  modalBody.empty();

  
  let nameElement = $("<h1>" + pokemon.name + "</h1>");
  
  let imageElementFront = $('<img class="modal-img" style="width:80%">');
  imageElementFront.attr("src", pokemon.imageUrlFront);
  let imageElementBack = $('<img class="modal-img" style="width:80%">');
  imageElementBack.attr("src", pokemon.imageUrlBack);
  
  let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
  
  let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");
  
  let typesElement = $("<p>" + "types : " + pokemon.types + "</p>");
  
  let abilitiesElement = $("<p>" + "abilities : " + pokemon.abilities + "</p>");

  modalTitle.append(nameElement);
  modalBody.append(imageElementFront);
  modalBody.append(imageElementBack);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typesElement);
  modalBody.append(abilitiesElement);
}

$(document).ready(function(){
  $("#search-pokemon").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".button-class").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showModal: showModal
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});