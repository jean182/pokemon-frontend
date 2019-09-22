import React from "react"
import PropTypes from "prop-types"
import Toggle from "react-toggle"
import "react-toggle/style.css"

const Header = props => {
  const { isOn, toggleTheme } = props
  return (
    <header className="container p-3 d-flex justify-content-between">
      <nav>
        <h1>Pokedex</h1>
      </nav>
      <nav style={{ display: "flex", justifyContent: "spaceBetween" }}>
        <div>
          <Toggle defaultChecked={isOn} icons={false} onChange={toggleTheme} />
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
