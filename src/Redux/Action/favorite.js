export const addFavoritePokemon = (idPokemon) => {
  return {
    type: "ADD_FAVORITE",
    payload: idPokemon,
  };
};
