import { combineReducers } from "redux";
import favoriteReducer from "./favorite";
import catchedReducer from "./catched";

export default combineReducers({
  favorite: favoriteReducer,
  catched: catchedReducer,
});
