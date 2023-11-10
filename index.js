import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let page = 1;
let maxPage;
const searchQuery = "";


function fetchCharacters() {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => response.json())

    .then(charactersData => {
      maxPage = charactersData.info.pages;
      pagination.textContent = `Page ${page} of ${maxPage}`;
      const characters = charactersData.results;
      cardContainer.innerHTML = "";

      characters.forEach((character) => {
        const card = CharacterCard(character);
        cardContainer.append(card);
      });
    })
    .catch(error => {
      console.error('Error fetching characters:', error);
    });
}

fetchCharacters();

prevButton.addEventListener('click', () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

nextButton.addEventListener('click', () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});
