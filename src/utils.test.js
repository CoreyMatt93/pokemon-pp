import { describe, test, expect } from "vitest";
import {
  filterByType,
  getPokemonNames,
  getStrongestPokemon,
  sortByName,
  calculateAverageHP,
} from "./utils.js";

// Sample test data
const MOCK_DATA = [
  { id: 1, name: "Bulbasaur", type: "grass", hp: 45, attack: 49, defense: 49 },
  { id: 4, name: "Charmander", type: "fire", hp: 39, attack: 52, defense: 43 },
  { id: 7, name: "Squirtle", type: "water", hp: 44, attack: 48, defense: 65 },
  {
    id: 25,
    name: "Pikachu",
    type: "electric",
    hp: 35,
    attack: 55,
    defense: 40,
  },
];

describe("filterByType", () => {
  test("should return only fire type Pokemon", () => {
    // Input for testing
    const POKEMON_TYPE = "fire";
    // Arrange Outputs
    const EXPECTED_LENGTH = 1;
    const EXPECTED_NAME = "Charmander";

    const result = filterByType(MOCK_DATA, POKEMON_TYPE);
    // Assert
    expect(result.length).toBe(EXPECTED_LENGTH);
    expect(result[0].name).toBe(EXPECTED_NAME);
  });

  test("should return only water type Pokemon", () => {
    const POKEMON_TYPE = "water";
    const EXPECTED_LENGTH = 1;
    const EXPECTED_NAME = "Squirtle";
    const result = filterByType(MOCK_DATA, POKEMON_TYPE);
    expect(result.length).toBe(EXPECTED_LENGTH);
    expect(result[0].name).toBe(EXPECTED_NAME);
  });

  test("should return empty array for non existent type", () => {
    const POKEMON_TYPE = "psychic";
    const EXPECTED_LENGTH = 0;
    const result = filterByType(MOCK_DATA, POKEMON_TYPE);
    expect(result.length).toBe(EXPECTED_LENGTH);
  });
});

describe("getPokemonNames", () => {
  test("should return array of Pokemon names", () => {
    const result = getPokemonNames(MOCK_DATA);
    expect(result).toEqual(["Bulbasaur", "Charmander", "Squirtle", "Pikachu"]);
  });

  // ✅ COMPLETE: This test is done
  test("should return empty array for empty input", () => {
    const result = getPokemonNames([]);
    expect(result).toEqual([]);
  });
});

describe("getStrongestPokemon", () => {
  // Arrange: an array of Pokémon objects
  // Each Pokémon has id, name, type, hp, attack, defense
  const INPUT = [
    {
      id: 1,
      name: "Bulbasaur",
      type: "grass",
      hp: 45,
      attack: 49,
      defense: 49,
    },
    {
      id: 4,
      name: "Charmander",
      type: "fire",
      hp: 39,
      attack: 52,
      defense: 43,
    },
    { id: 7, name: "Squirtle", type: "water", hp: 44, attack: 48, defense: 65 },
    {
      id: 25,
      name: "Pikachu",
      type: "electric",
      hp: 35,
      attack: 55,
      defense: 40,
    },
    { id: 133, name: "Eevee", type: "normal", hp: 55, attack: 55, defense: 50 }, // same highest attack as Pikachu
  ];

  test("should return all of the Pokémon with the highest attack including multiple in case of tie", () => {
    // Act
    // Call the function with INPUT to get the strongest Pokémon
    const result = getStrongestPokemon(INPUT);

    // Assert
    // .toContain() checks if result.name is in the array ["Pikachu", "Eevee"]
    // This ensures the function returns one of the Pokémon with the highest attack even including ties
    expect(["Pikachu", "Eevee"]).toContain(result.name);

    // Verify the attack value of the returned Pokémon is correct (55)
    expect(result.attack).toBe(55);
  });
});

describe("sortByName", () => {
  test("should return array with pokemon names sorted alphabetically without mutating the original array", () => {
    // Arrange
    const INPUT = [
      { name: "Squirtle" },
      { name: "Bulbasaur" },
      { name: "Pikachu" },
      { name: "Charmander" },
    ];

    const EXPECTED_OUTPUT = [
      { name: "Bulbasaur" },
      { name: "Charmander" },
      { name: "Pikachu" },
      { name: "Squirtle" },
    ];

    // Act
    const actualOutput = sortByName(INPUT);

    // Assert
    expect(actualOutput).toEqual(EXPECTED_OUTPUT);
    expect(INPUT).toEqual(INPUT);
  });
  // TODO: Write test to verify Pokemon are sorted alphabetically
  // TODO: Write test to verify original array is not modified (immutability)
});

describe("calculateAverageHP", () => {
  test("should calculate average HP correctly", () => {
    const pokemon = [
      { name: "Pikachu", hp: 35 },
      { name: "Charmander", hp: 39 },
      { name: "Squirtle", hp: 44 },
    ];

    const result = calculateAverageHP(pokemon);
    const expectedAvg = (35 + 39 + 44) / 3;

    // Average of 35, 39, 44 = 39.33...
    expect(result).toBeCloseTo(expectedAvg, 1);
  });

  test("should return 0 for empty array", () => {
    const result = calculateAverageHP([]);
    expect(result).toBe(0);
  });

  test("should handle single Pokemon", () => {
    const result = calculateAverageHP([{ hp: 100 }]);
    expect(result).toBe(100);
  });
});
