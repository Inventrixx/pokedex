import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { getUniquePokemon } from "../calls/getUniquePokemon";

const PokemonList = ({ pokeName, page }) => {
  const [myPokeInfo, setMyPokeInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUniquePokemon(pokeName)
      .then(response => {
        setMyPokeInfo(response);
      })
      .catch(e => console.warn(e))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [page, pokeName]);

  let typeTransformed =
    myPokeInfo.type &&
    myPokeInfo.type.map((type, i) => {
      return <span key={i}> {type} </span>;
    });
  return (
    <section className="pokemon-pokeList">
      {loading ? (
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      ) : (
        <div className="pokemon-pokeList-container">
          <div className="pokemon-pokeList-container-header">
            <span># {myPokeInfo.id} </span>
            <span>{pokeName}</span>
          </div>
          <div>
            <div className="pokedex-pokemon-information">
              <div className="pokedex-pokemon-information-img">
                <img src={myPokeInfo.img} />
              </div>
              <ul className="pokedex-pokemon-information-details">
                <li>type: {typeTransformed}</li>
                <li>weight: {myPokeInfo.weight} hg</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PokemonList;
