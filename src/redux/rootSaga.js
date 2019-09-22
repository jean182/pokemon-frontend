import { all } from "redux-saga/effects"
import { pokemonWatcherSaga } from "./modules/pokemon"

export default function* rootSaga() {
  yield all([pokemonWatcherSaga()])
}
