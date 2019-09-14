import React from "react"
import PropTypes from "prop-types"
import Switch from "./Switch"

const Header = props => {
  const { isOn, toggleTheme } = props
  return (
    <header className="container p-3 d-flex justify-content-between">
      <nav>
        <h1>Pokedex</h1>
      </nav>
      <nav style={{ display: "flex", justifyContent: "spaceBetween" }}>
        <div>
          <Switch isOn={isOn} handleToggle={toggleTheme} />
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  isOn: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Header
