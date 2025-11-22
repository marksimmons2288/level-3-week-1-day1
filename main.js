// Imports
import { getPokemonAPI } from "./services/getPokemonService.js";
import renderPokemonResponse from "./components/renderPokemonResponse.js";

// My variables
const content = document.getElementById("content");
const mainForm = document.getElementById("mainForm");

// Inputs
const searchInput = document.getElementById("pokemonSearchInput");

// Main form event listener
mainForm.addEventListener("submit", async (e) => {
  // Prevent the default action of the form
  e.preventDefault();

  // Validate the input
  const searchValue = searchInput.value;

  if(searchValue.length > 0) {
    // Make the loader before the api call, then remove the loader with teh API response
    content.innerHTML = `
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    `;

    const pokemonResponse = await getPokemonAPI(String(searchValue));

    renderPokemonResponse(pokemonResponse);
  }
});