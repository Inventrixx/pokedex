import axios from "axios";

export const getAllPokemons = async () => {
  try {
    let response = await axios.get(`http://localhost:8080/api/`);
    let responseAllPokemons = await response.data.results;
    return responseAllPokemons;
  } catch (e) {
    console.warn(e);
  }
};
