import React from "react";

const SearchBar = ({ pokeSearch }) => {
  const onChangeInput = e => {
    e.preventDefault();
    pokeSearch(e.target.value);
  };

  return (
    <section className="search-bar">
      <div className="pokedex-search-input">
        <input
          placeholder="Gotta catch 'em all!"
          type="text"
          onChange={onChangeInput}
        />
      </div>
    </section>
  );
};

export default SearchBar;
