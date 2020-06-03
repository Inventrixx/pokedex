import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";
import PokemonList from "./PokemonList/PokemonList";
import "./App.css";

const App = () => {
  const [myPokemonFetched, setMyPokemonFetched] = useState([]);

  useEffect(() => {
    const myFetchedPokemon = async () => {
      try {
        let myFetchedPokemon = await axios.get(`http://localhost:8080/api/`);
        setMyPokemonFetched(myFetchedPokemon.data.results);
      } catch (e) {
        console.warn(e);
      }
    };
    myFetchedPokemon();
  }, []);

  return (
    <section className="pokedex-main-section">
      <SearchBar />
      <PokemonList myPokemonFetched={myPokemonFetched} />
    </section>
  );
};

export default App;
