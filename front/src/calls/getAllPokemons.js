import axios from "axios";

export const getAllPokemons = async (addPage, limit) => {
  try {
    let response = await axios.get(
      `http://localhost:8080/api?offset=${addPage}&limit=${limit}`
    );
    let responseAllPokemons = await response.data;
    return responseAllPokemons;
  } catch (e) {
    console.warn(e);
  }
};
