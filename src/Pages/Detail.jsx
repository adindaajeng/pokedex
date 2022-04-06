import React from "react";

import axios from "axios";

import { Modal, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { addFavoritePokemon } from "../Redux/Action/favorite";
import { addCatchedPokemon } from "../Redux/Action/catched";

const Detail = () => {
  const [pokemon, setPokemon] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const params = useParams();

  const dispatch = useDispatch();

  const catched = useSelector((state) => {
    return state.catched;
  });

  const addToFavorite = () => {
    dispatch(addFavoritePokemon(pokemon.id));
  };

  const catchPokemon = () => {
    dispatch(addCatchedPokemon(pokemon.id, pokemon.capture_rate));
    if (catched.message) {
      setShow(true);
    }
  };

  useEffect(() => {
    async function fetchPokemon() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
      );
      const data = await res.data;

      setPokemon(data);
    }
    fetchPokemon();
  }, []);

  return (
    <div className="container m-5">
      {catched.message && (
        <Modal show={show} onHide={handleShow}>
          <Modal.Header>
            <Modal.Title>Failed to Catch Pokemon</Modal.Title>
          </Modal.Header>
          <Modal.Body>Sorry, you failed to catch this pokemon</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <div className="col-md-9 col-12 m-auto row">
        <h3 className="text-center">
          #0{pokemon.id && pokemon.id}{" "}
          {pokemon.name && pokemon.name.toUpperCase()}
        </h3>

        <div className="col-3 my-4">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${params.id}.svg`}
            className="w-100"
            alt=""
          />
        </div>
        <div className="col-9 my-4">
          <h4>Bio</h4>
          <p>{pokemon.name && pokemon.flavor_text_entries[2].flavor_text}</p>

          <div className="d-flex flex-wrap">
            <div className="me-5 my-2">
              <h6>Base Happiness</h6>
              <p>{pokemon.name && pokemon.base_happiness}</p>
            </div>
            <div className="me-5 my-2">
              <h6>Capture Rate</h6>
              <p>{pokemon.name && pokemon.capture_rate}</p>
            </div>
            <div className="me-5 my-2">
              <h6>Color</h6>
              <p>{pokemon.name && pokemon.color.name}</p>
            </div>
            <div className="me-5 my-2">
              <h6>Egg Groups</h6>
              <p>{pokemon.name && pokemon.egg_groups[0].name}</p>
            </div>
            <div className="me-5 my-2">
              <h6>Genus</h6>
              <p>{pokemon.name && pokemon.genera[7].genus}</p>
            </div>
            <div className="me-5 my-2">
              <h6>Habitat</h6>
              <p>{pokemon.id && pokemon.habitat.name}</p>
            </div>
            <div className="me-5 my-2">
              <h6>Evolves From </h6>
              <p>
                {pokemon.evolves_from_species
                  ? pokemon.evolves_from_species.name
                  : "None"}
              </p>
            </div>
          </div>
          <button className="btn btn-dark" onClick={addToFavorite}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png"
              alt="FAV"
              className="w-30 me-2"
            />{" "}
            Add To Favorite
          </button>
          <button className="btn btn-dark mx-5" onClick={catchPokemon}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
              alt="POKEBALL"
              className="w-30 me-2"
            />{" "}
            Catch this pokemon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
