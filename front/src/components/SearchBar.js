import React from "react";

const SearchBar = ({ pokeSearch }) => {
  const onChangeInput = e => {
    e.preventDefault();
    pokeSearch(e.target.value);
  };

  return (
    <section className="search-bar">
      <input type="text" onChange={onChangeInput} />
    </section>
  );
};

export default SearchBar;
