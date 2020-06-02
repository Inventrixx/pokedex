const axios = require("axios");

class PokeService {
  //here I will consume the pokeAPI

  getAllPokemons = async () => {
    let arrPokemons = [];
    try {
      let pokeResult = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=954`
      );
      arrPokemons = await pokeResult.data;
    } catch (e) {
      console.warn(e);
    }

    return arrPokemons;
  };
}

module.exports = PokeService;
