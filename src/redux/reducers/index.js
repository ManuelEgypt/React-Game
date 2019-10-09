import { combineReducers } from "redux";

import gameReducer from "./game";


const rootReducer = combineReducers({
  rootGame: gameReducer,
 
});

export default rootReducer;