import { all } from "redux-saga/effects"
import { pokemonListWatcherSaga } from "./modules/pokemon/pokemonList"
import { pokemonWatcherSaga } from "./modules/pokemon/pokemon"

export default function* rootSaga() {
  yield all([pokemonListWatcherSaga(), pokemonWatcherSaga()])
}
