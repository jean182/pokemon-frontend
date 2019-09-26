import { combineReducers } from "redux"
import pokemonReducer from "./modules/pokemon/mainReducer"

const rootReducer = combineReducers({
  pokemonReducer,
})

export default rootReducer
