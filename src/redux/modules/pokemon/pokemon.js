import { call, cancel, fork, put, take, takeLatest } from "redux-saga/effects"
import _ from "lodash"
import { requestPokemon } from "../../../api/pokemonRequests"

// Actions types
// Actions types
const FETCH_POKEMON = "pokemon-frontend/pokemon/FETCH_POKEMON"
const FETCH_POKEMON_SUCCESS = "pokemon-frontend/pokemon/FETCH_POKEMON_SUCCESS"
const FETCH_POKEMON_FAILURE = "pokemon-frontend/pokemon/FETCH_POKEMON_FAILURE"
const RESET_POKEMON = "pokemon-frontend/pokemon/RESET_POKEMON"

const initialState = { pokemon: {}, isLoading: false, error: {} }

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_POKEMON_SUCCESS:
      const { data } = action.payload
      return {
        ...state,
        pokemon: data,
        isLoading: false,
      }
    case FETCH_POKEMON_FAILURE:
      const error = _.isUndefined(action.payload.response)
        ? action.payload.message
        : action.payload.response.data.error
      return {
        ...state,
        error,
        isLoading: false,
      }
    case RESET_POKEMON:
      return { ...state, ...initialState }
    default:
      return state
  }
}

// Action Creators
export function loadPokemon(payload) {
  return { type: FETCH_POKEMON, payload }
}

export function loadPokemonSucceed(payload) {
  return { type: FETCH_POKEMON_SUCCESS, payload }
}

export function loadPokemonFailed(payload) {
  return { type: FETCH_POKEMON_FAILURE, payload }
}

export function resetPokemon() {
  return { type: RESET_POKEMON }
}

// Sagas

export function* fetchPokemonSaga(action) {
  try {
    const id = action.payload
    const response = yield call(requestPokemon, id)
    yield put(loadPokemonSucceed(response))
  } catch (error) {
    yield put(loadPokemonFailed(error))
  }
}

export function* watchRequest(action) {
  const task = yield fork(fetchPokemonSaga, action)
  yield take(RESET_POKEMON)
  yield cancel(task)
}

export function* pokemonWatcherSaga() {
  yield takeLatest(FETCH_POKEMON, watchRequest)
}
