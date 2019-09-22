import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "../components/partials/Header"
import { isRunningInBrowser } from "../utils/helpers"
import PokemonList from "../components/partials/PokemonList"

class App extends Component {
  constructor(props) {
    let theme = "light"
    if (isRunningInBrowser()) {
      theme = JSON.parse(localStorage.getItem("theme")) || "light"
      if (theme !== null) {
        document.documentElement.setAttribute("data-theme", theme)
      }
    }
    super(props)
    this.state = {
      theme,
      isOn: theme !== "light" ? true : false,
    }
  }

  toggleTheme = () => {
    const theme = this.state.theme === "light" ? "dark" : "light"
    this.setState({ theme, isOn: theme !== "light" ? true : false })
    document.documentElement.setAttribute("data-theme", theme)
    isRunningInBrowser() && localStorage.setItem("theme", JSON.stringify(theme))
  }

  render() {
    const { isOn } = this.state
    return (
      <Router>
        <div>
          <Header isOn={isOn} toggleTheme={this.toggleTheme} />
          <Route path="/" exact component={PokemonList} />
        </div>
      </Router>
    )
  }
}

export default App
