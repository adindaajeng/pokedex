const init_state = {
  catched: [],
  message: "",
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "SUCCESS_CATCHED_POKEMON":
      return {
        message: "",
        catched: [...state.catched, action.payload],
      };
    case "FAILED_CATCHED_POKEMON":
      return {
        ...state,
        message: "Sorry, you failed in catching this pokemon",
      };
    case "RELEASE_CATCHED_POKEMON":
      return init_state;
    default:
      return state;
  }
};

export default reducer;
