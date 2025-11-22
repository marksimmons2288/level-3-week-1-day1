
const content = document.getElementById("content");

function renderPokemonResponse(apiResponse) {
  if (apiResponse.success) {
    // Display the pokemon name
    const pokemon = apiResponse.data;
   

    const typesArray = pokemon.types;
    // let typesString = '';

    // typesArray.forEach((type, index) => {
    //   typesString += type.type.name;

    //   if (index < typesArray.length - 1) {
    //     typesString += ', ';
    //   }
    // });

    const typesString = typesArray.map(type => type.type.name).join(", ");

    content.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="Sprite image of ${pokemon.name}">
        <div class="card-body">
          <h5 class="card-title">Name: ${pokemon.name} - ID: ${pokemon.id}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Pokemon Weight: ${pokemon.weight}</li>
            <li class="list-group-item">Pokemon Height: ${pokemon.height}</li>
            <li class="list-group-item">Pokemon Types: ${typesString}</li>
          </ul>
        </div>
      </div>
    `;
  } else {
    // Display the error message
    const { error } = apiResponse;

    content.innerHTML = `
      <h2 class="text-danger">The API failed because: ${error.message}</h2>
    `;
  }
}

export default renderPokemonResponse;