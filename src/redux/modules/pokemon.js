import { call, put, takeLatest } from "redux-saga/effects"
import { createSelector } from "reselect"
import _ from "lodash"
import { requestPokemon } from "../../api/pokemonRequests"

// Actions types
const FETCH_POKEMON_DATA = "pokemon-frontend/pokemon/FETCH_POKEMON_DATA"
const FETCH_POKEMON_SUCCESS = "pokemon-frontend/pokemon/FETCH_POKEMON_SUCCESS"
const FETCH_POKEMON_FAILURE = "pokemon-frontend/pokemon/FETCH_POKEMON_FAILURE"
const RESET_POKEMON_DATA = "pokemon-frontend/pokemon/RESET_POKEMON_DATA"

const initialState = { pokemonList: [], isLoading: false, error: {} }

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_POKEMON_DATA:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemonList: action.payload.data,
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
    case RESET_POKEMON_DATA:
      return { ...state, ...initialState }
    default:
      return state
  }
}

// Action Creators
export function loadPokemon() {
  return { type: FETCH_POKEMON_DATA }
}

export function loadPokemonSucceed(payload) {
  return { type: FETCH_POKEMON_SUCCESS, payload }
}

export function loadPokemonFailed(payload) {
  return { type: FETCH_POKEMON_FAILURE, payload }
}

export function resetPokemon() {
  return { type: RESET_POKEMON_DATA }
}

// Selectors

const pokemonSelector = state => state.pokemonReducer.pokemonList

export const sortedPokemon = createSelector(
  pokemonSelector,
  pokemon => pokemon.sort((a, b) => a.pokedexNumber - b.pokedexNumber)
)

// Sagas

export function* fetchPokemonSaga() {
  try {
    const response = yield call(requestPokemon)
    yield put(loadPokemonSucceed(response))
  } catch (error) {
    yield put(loadPokemonFailed(error))
  }
}

export function* pokemonWatcherSaga() {
  yield takeLatest(FETCH_POKEMON_DATA, fetchPokemonSaga)
}
