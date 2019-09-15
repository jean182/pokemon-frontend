import { call, put } from "redux-saga/effects"
import pokemonReducer, {
  loadPokemon,
  fetchPokemonSaga,
  loadPokemonFailed,
} from "../pokemon"
import { requestPokemon } from "../../../api/pokemonRequests"

const pokemon = [
  {
    pokedexNumber: 2,
    name: "Ivysaur",
    pokedexEntry: null,
    weight: "130",
    height: "10",
  },
  {
    pokedexNumber: 1,
    name: "Bulbasaur",
    pokedexEntry: null,
    weight: "69",
    height: "7",
  },
]

const initialState = { pokemonList: [], isLoading: false, error: {} }

// Reducer tests

describe("reducers", () => {
  describe("pokemon", () => {
    it("should provide the initial state", () => {
      expect(pokemonReducer(undefined, {})).toEqual(initialState)
    })

    it("should handle FETCH_POKEMON_DATA action", () => {
      expect(
        pokemonReducer(
          {},
          { type: "pokemon-frontend/pokemon/FETCH_POKEMON_DATA" }
        )
      ).toEqual({
        isLoading: true,
      })
    })

    it("should handle FETCH_POKEMON_SUCCESS action", () => {
      expect(
        pokemonReducer(
          { ...initialState, isLoading: true },
          {
            type: "pokemon-frontend/pokemon/FETCH_POKEMON_SUCCESS",
            payload: {
              data: pokemon,
            },
          }
        )
      ).toEqual({ ...initialState, pokemonList: pokemon })
    })

    it("should handle FETCH_POKEMON_FAILURE action", () => {
      expect(
        pokemonReducer(
          { ...initialState, isLoading: true },
          {
            type: "pokemon-frontend/pokemon/FETCH_POKEMON_FAILURE",
            payload: {
              response: {
                data: { error: "Request failed with status code 404" },
              },
            },
          }
        )
      ).toEqual({
        ...initialState,
        error: "Request failed with status code 404",
      })
    })
  })
})

// Sagas

describe("sagas", () => {
  describe("#fetchPokemonSaga", () => {
    describe("when saga is triggered", () => {
      const generator = fetchPokemonSaga()
      const next = generator.next(loadPokemon())
      expect(next.value).toEqual(call(requestPokemon))
    })

    it("Fetches the pokemon list successfully", () => {
      const data = pokemon
      const generator = fetchPokemonSaga()
      expect(generator.next().value).toEqual(call(requestPokemon))
      const success = generator.next({ data })

      expect(success.value).toEqual(
        put({
          type: "pokemon-frontend/pokemon/FETCH_POKEMON_SUCCESS",
          payload: { data },
        })
      )
    })

    it("Handles exception as expected", () => {
      const generator = fetchPokemonSaga()
      generator.next()
      const error = generator.throw(new Error("Something went wrong"))
      expect(error.value).toEqual(
        put(loadPokemonFailed(new Error("Something went wrong")))
      )
    })
  })
})
