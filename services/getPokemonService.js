const baseUrl = "https://pokeapi.co/api/v2";

// Flow to make API requests
/*
  1. Create an async function to interact with the API using try and catch block
  2. Call this function in the main stream of our app
  3. We use the data of the API to render anything on scream
*/
/* Using Axios - Async Await */
async function getPokemonAPI(pokemonName) {
  const endpoint = `${baseUrl}/pokemon/${pokemonName}`;

  try {
    const response = await axios.get(endpoint);

    const data = await response.data;

    return {
      success: true,
      data
    };
  } catch (error) {

    return {
      success: false,
      error
    };
  }
}

async function getAbilitiesAPI() {
  const endpoint = `${baseUrl}/ability`;

  try {
    const response = await axios.get(endpoint);

    const data = await response.data;

    return {
      success: true,
      data
    };
  } catch (error) {

    return {
      success: false,
      error
    };
  }
}

async function getItemAPI(itemId) {
  const endpoint = `${baseUrl}/item/${itemId}`;

  try {
    const response = await axios.get(endpoint);

    const data = await response.data;

    return {
      success: true,
      data
    };
  } catch (error) {

    return {
      success: false,
      error
    };
  }
}

export { getPokemonAPI, getAbilitiesAPI, getItemAPI };
