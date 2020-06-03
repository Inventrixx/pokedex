import React from "react";

const PokemonList = ({
  myPokemonSearched,
  myPokemonFetched,
  filteredPokemons
}) => {
  const noValue = myPokemonFetched && myPokemonSearched.length === 0;
  return (
    myPokemonFetched &&
    (noValue ? (
      <div>
        {myPokemonFetched.slice(0, 3).map(pokemon => (
          <ul>
            <li>{pokemon.name}</li>
          </ul>
        ))}
      </div>
    ) : (
      <div>
        {filteredPokemons.map(pokemon => {
          return <div>{pokemon.name}</div>;
        })}
      </div>
    ))
  );
};

export default PokemonList;
