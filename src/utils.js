// filterByType: keeps only Pokémon that match a specific type
export const filterByType = (pokemonList, type) => {
  // .filter() goes through each Pokémon in the list
  // and keeps it only if the condition is true
  return pokemonList.filter((pokemon) => pokemon.type === type);
};

// getPokemonNames: creates a new list with only the names
export const getPokemonNames = (pokemonList) => {
  // .map() transforms each Pokémon object into just its name
  return pokemonList.map((pokemon) => pokemon.name);
};

// getStrongestPokemon: finds all Pokémon with the highest attack value
export const getStrongestPokemon = (pokemonList) => {
  // Sort the list by attack in descending order
  const sortedByAttack = [...pokemonList].sort((a, b) => b.attack - a.attack);

  // Get the highest attack value
  const highestAttack = sortedByAttack[0].attack;

  // Return all Pokémon that have the highest attack
  return sortedByAttack.filter((pokemon) => pokemon.attack === highestAttack);
};

// sortByName: returns a new list of Pokémon sorted alphabetically by name
export const sortByName = (pokemonList) =>
  // structuredClone() makes a full copy so we don’t change the original list
  structuredClone(pokemonList)
    // .sort() compares two Pokémon at a time and orders them A→Z
    .sort((a, b) => a.name.localeCompare(b.name));

// calculateAverageHP: finds the average HP (health points) of all Pokémon
export const calculateAverageHP = (pokemonList) => {
  // If the list is empty, there’s nothing to average — return 0
  if (pokemonList.length === 0) return 0;

  // .reduce() adds up the HP of every Pokémon
  const totalHP = pokemonList.reduce((sum, pokemon) => sum + pokemon.hp, 0);

  // Divide the total HP by how many Pokémon there are to get the average
  return totalHP / pokemonList.length;
};
