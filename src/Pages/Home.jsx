import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [state, setState] = useState({
    pokemonList: [],
    page: 1,
    offset: 0,
    limit: 20,
    loading: false,
    noData: false,
  });

  const fetchPokemon = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon-species/?offset=${
          (state.page - 1) * state.limit
        }&limit=${state.limit}`
      )
      .then((result) => {
        function createPokemonObject(arr) {
          arr.forEach(async (pokemon) => {
            const res = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
            );
            const data = res.data;

            setState((state) => ({
              ...state,
              pokemonList: [...state.pokemonList, data],
            }));
          });
        }

        createPokemonObject(result.data.results);
      })
      .catch((err) => {
        alert("There was an error with the server");
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, [state.page]);

  const renderPokemonList = () => {
    return state.pokemonList.map((data) => {
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
    <div className="container d-flex flex-column align-items-center">
      <h1 className="my-4">Pokemon Library</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {renderPokemonList()}
      </div>
      <div className="d-flex align-items-center h6 mb-5 mt-2">
        <button
          className="mx-3 btn btn-dark"
          onClick={() => {
            setState({ ...state, page: state.page + 1 });
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
