import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import PaginationButtons from "./PaginationButtons";
import { getAllPokemons } from "../calls/getAllPokemons";

const Pokedex = () => {
  const [myPokemonFetched, setMyPokemonFetched] = useState([]);
  const [myPokemonSearched, setMyPokemonSearched] = useState("");
  const [addPage, setAddPage] = useState(0);
  const [searchPerPage, setSearchPerPage] = useState(3);

  useEffect(() => {
    let limit = 3;
    if (window.innerWidth > 800) {
      limit = 6;
      setSearchPerPage(limit);
    }

    getAllPokemons(addPage, limit)
      .then(response => {
        setMyPokemonFetched(response);
      })
      .catch(e => console.warn(e));
  }, [addPage]);

  const pokeSearch = pokemon => {
    setMyPokemonSearched(pokemon);
  };

  let filteredPokemons =
    myPokemonFetched &&
    myPokemonFetched.filter(pokemon => {
      return pokemon.name.indexOf(myPokemonSearched) !== -1;
    });

  let noResults = filteredPokemons.length === 0;

  return (
    <section className="pokedex-main-section">
      <div className="pokedex-header">
        <div className="pokedex-circle"></div>
        <span className="pokedex-title">Pokedex!</span>
      </div>
      <SearchBar pokeSearch={pokeSearch} />

      <div className="pokedex-pokemon-fetched">
        {noResults ? (
          "There are no results for your search, try next page!"
        ) : (
          <div className="pokedex-pokemon-design">
            {myPokemonFetched &&
              filteredPokemons.map((pokemon, i) => {
                return (
                  <PokemonList
                    key={i}
                    noResults={noResults}
                    myPokemonSearched={myPokemonSearched}
                    page={addPage}
                    pokeName={pokemon.name}
                  />
                );
              })}
          </div>
        )}
      </div>

      <PaginationButtons
        addPage={addPage}
        setAddPage={setAddPage}
        searchPerPage={searchPerPage}
      />
    </section>
  );
};

export default Pokedex;
