import { CANCEL } from "redux-saga"
import { CancelToken } from "axios"
import axiosInstance from "./axiosInstance"

export const requestPokemonList = () => {
  return axiosInstance.get("/pokemon/")
}

export const requestPokemon = id => {
  const source = CancelToken.source()
  const request = axiosInstance.get(`/pokemon/${id}`, {
    cancelToken: source.token,
  })
  request[CANCEL] = () => source.cancel()
  return request
}
