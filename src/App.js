import React, { Component } from "react"
import Pokedex from "./components/partials/Pokedex/Pokedex"
import { isRunningInBrowser } from "./utils/helpers"
import "bootstrap-4-grid/css/grid.min.css"
import "./styles/main.scss"
import Header from "./components/partials/Header"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: "light",
    }
  }

  componentWillMount() {
    if (isRunningInBrowser()) {
      let theme = JSON.parse(localStorage.getItem("theme"))
      if (theme !== null) {
        this.setState({ theme })
        document.documentElement.setAttribute("data-theme", theme)
      }
    }
  }
  toggleTheme = () => {
    const theme = this.state.theme === "light" ? "dark" : "light"
    this.setState({ theme })
    document.documentElement.setAttribute("data-theme", theme)
    isRunningInBrowser() && localStorage.setItem("theme", JSON.stringify(theme))
  }

  render() {
    const { theme } = this.state
    const isOn = theme !== "light" ? true : false
    return (
      <div>
        <Header isOn={isOn} toggleTheme={this.toggleTheme} />
        <Pokedex />
      </div>
    )
  }
}

export default App
