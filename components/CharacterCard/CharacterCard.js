export function CharacterCard(character) {
  const cardContainer = document.createElement('ul');
  cardContainer.classList.add('.card-container');
  cardContainer.setAttribute('data-js="card-container"');
  const card = document.createElement('li');
  card.classList.add('card');
  card.innerHTML = `<div class="card__image-container">
            <img
              class="card__image"
              src="${character.image}"
              alt="${character.name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${character.name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${character.status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${character.type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${character.occurrences}</dd>
            </dl>
          </div>`;
  // cardContainer.appendChild(card);
  document.body.append();
  // return cardContainer;
}
