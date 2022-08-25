const BASE_URL = 'https://pokeapi.co/api/v2';

const query = {
  species: 'pokemon-species',
};

export async function fetchDescription(species: number) {
  return fetch(`${BASE_URL}/${query.species}/${species}`);
}
