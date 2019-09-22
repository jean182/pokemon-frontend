import axios from "axios"
import humps from "humps"

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => humps.camelizeKeys(data),
  ],
  transformRequest: [
    data => humps.decamelizeKeys(data),
    ...axios.defaults.transformRequest,
  ],
})

export default axiosInstance
