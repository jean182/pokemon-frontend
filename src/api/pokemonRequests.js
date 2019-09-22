import axiosInstance from "./axiosInstance"

export const requestPokemon = () => {
  return axiosInstance.get("/pokemon/")
}
