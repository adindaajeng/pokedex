export const addCatchedPokemon = (idPokemon, captureRate) => {
  let randomNum = Math.round(Math.random() * 255);
  console.log(randomNum);
  if (randomNum < captureRate) {
    return {
      type: "SUCCESS_CATCHED_POKEMON",
      payload: idPokemon,
    };
  } else {
    return { type: "FAILED_CATCHED_POKEMON" };
  }
};

export const releaseCatchedPokemon = () => {
  return {
    type: "RELEASE_CATCHED_POKEMON",
  };
};
