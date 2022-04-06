import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { releaseCatchedPokemon } from "../Redux/Action/catched";

import Card from "../Components/Card";

const Catched = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const dispatch = useDispatch();

  const catched = useSelector((state) => {
    return state.catched;
  });

  const fetchPokemon = () => {
    return catched.catched.map(async (item) => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`);
      const data = await res.data;

      setPokemonList((state) => [...state, data]);
    });
  };

  useEffect(fetchPokemon, []);

  const releasePokemonBtn = () => {
    dispatch(releaseCatchedPokemon());
    setPokemonList([]);
  };

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
          <h1 className="my-4 text-center">My Catched Pokemon</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {renderPokemonList()}
          </div>

          <div className="d-flex justify-content-end m-3">
            <button className="mx-3 btn btn-dark" onClick={releasePokemonBtn}>
              Release My Catched Pokemon
            </button>
          </div>
        </>
      ) : (
        <div className="alert alert-danger my-5">
          You have not catched any Pokemon
        </div>
      )}
    </div>
  );
};

export default Catched;
