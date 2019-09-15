import React from "react"
import { Provider } from "react-redux"
import AppRouter from "./routers/AppRouter"
import configureStore from "./redux/configureStore"
import "bootstrap-4-grid/css/grid.min.css"
import "./styles/main.scss"

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
