import { combineReducers } from "redux"
import pokemonReducer from "./modules/pokemon"

const rootReducer = combineReducers({
  pokemonReducer,
})

export default rootReducer
