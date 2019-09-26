import React from "react"
import PropTypes from "prop-types"
import { Toggle } from "react-toggle-component"

const Header = props => {
  const { isOn, toggleTheme } = props
  return (
    <header className="container p-3 d-flex justify-content-between">
      <nav>
        <h1>Pokedex</h1>
      </nav>
      <nav style={{ display: "flex", justifyContent: "spaceBetween" }}>
        <div>
          <Toggle
            name="switch"
            checked={isOn}
            onToggle={toggleTheme}
            borderColor={`var(--toggleBackground)`}
            backgroundColor={`var(--toggleBackground)`}
            knobColor={`#fff`}
            knobHeight="22px"
            knobWidth="22px"
            knobGap="1px"
            width="55px"
            height="24px"
          />
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
