const init_state = {
  favorite: [],
  message: "",
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
