import axios from "axios";

export const getUniquePokemon = async pokeName => {
  try {
    let response = await axios.get(`http://localhost:8080/api/${pokeName}`);
    let myPokemon = await response.data;
    return myPokemon;
  } catch (e) {
    console.warn(e);
  }
};
