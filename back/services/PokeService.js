const axios = require("axios");

class PokeService {
  //here I will consume the pokeAPI

  getAllPokemons = async (addPage, limit) => {
    let arrPokemons = [];
    try {
      let pokeResult = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${addPage}&limit=${limit}`
      );
      arrPokemons = await pokeResult.data;
    } catch (e) {
      console.warn(e);
    }

    return arrPokemons;
  };

  getUniquePokemon = async pokeName => {
    try {
      let pokeResult = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );
      return pokeResult.data;
    } catch (e) {
      console.warn(e);
    }
  };
}

module.exports = PokeService;
