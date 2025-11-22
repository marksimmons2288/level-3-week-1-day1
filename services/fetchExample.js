const baseUrl = "https://pokeapi.co/api/v2";

// Fetch information of this url 
// async function getPokemonData(pokemonName) {
//   const endpoint = `${baseUrl}/pokemon/${pokemonName}`;

//   try {
//     const response = await fetch(endpoint, {
//       method: "GET"
//     });

//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();

//     return result;
//   } catch(error) {
//     return error;
//   }
// }

// console.log(getPokemonData("charmander"));

// const apiResponse = getPokemonData("charmander")
//   .then(response => {
//     console.log("Raw Response:", response);

//     content.innerHTML = response.name;
//   })
//   .catch(error => console.error("Error fetching API:", error));

/* Using Fetch - Async Await */
async function fetchPokemon(pokemonName) {
  const endpoint = `${baseUrl}/pokemon/${pokemonName}`;

  try {
    const response = await fetch(endpoint);

    const data = await response.json();

    return data;
  } catch (error) {

    return error;
  }
}

export { fetchPokemon };