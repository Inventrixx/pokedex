import React, { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import { getAllPokemons } from "../calls/getAllPokemons";

const Pokedex = () => {
  const componentIsMounted = useRef(true);
  const [myPokemonFetched, setMyPokemonFetched] = useState([]);
  const [myPokemonSearched, setMyPokemonSearched] = useState("");

  useEffect(() => {
    getAllPokemons()
      .then(response => {
        if (componentIsMounted) setMyPokemonFetched(response);
      })
      .catch(e => console.warn(e));
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  const pokeSearch = pokemon => {
    setMyPokemonSearched(pokemon);
  };

  let filteredPokemons =
    myPokemonFetched &&
    myPokemonFetched.filter(pokemon => {
      return pokemon.name.indexOf(myPokemonSearched) !== -1;
    });

  return (
    <section className="pokedex-main-section">
      <SearchBar pokeSearch={pokeSearch} />
      <PokemonList
        myPokemonSearched={myPokemonSearched}
        myPokemonFetched={myPokemonFetched}
        filteredPokemons={filteredPokemons}
      />
    </section>
  );
};

export default Pokedex;
