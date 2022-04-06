import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import Card from "../Components/Card";

const Favorite = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const favorite = useSelector((state) => {
    return state.favorite;
  });

  const fetchPokemon = () => {
    return favorite.favorite.map(async (item) => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`);
      const data = await res.data;

      setPokemonList((state) => [...state, data]);
    });
  };

  useEffect(fetchPokemon, []);

  const renderPokemonList = () => {
    return pokemonList.map((data) => {
      return (
        <Card
          id={data.id}
          name={data.name}
          img={data.sprites.other.dream_world.front_default}
          type={data.types[0].type.name}
        />
      );
    });
  };

  return (
    <div className="container">
      {pokemonList.length ? (
        <>
          <h1 className="my-4 text-center">My Favorite Pokemon</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {renderPokemonList()}
          </div>
        </>
      ) : (
        <div className="alert alert-danger my-5">
          You have not added any favorite Pokemon
        </div>
      )}
    </div>
  );
};

export default Favorite;
