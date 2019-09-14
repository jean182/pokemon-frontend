import React from "react"
import PropTypes from "prop-types"

const PokedexHeader = ({ close }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex justify-content-between">
        <div>
          <figure className="pokedex-header-lightball">
            <span className="shadow"></span>
          </figure>
        </div>
        <div className="ml-3">
          <span
            className="pokedex-header-dot mr-1"
            style={{ backgroundColor: "#ff5952" }}
          ></span>
          <span
            className="pokedex-header-dot mr-1"
            style={{ backgroundColor: "#e6c02a" }}
          ></span>
          <span
            className="pokedex-header-dot mr-1"
            style={{ backgroundColor: "#52c22c" }}
          ></span>
        </div>
      </div>
      <button className="close" onClick={close}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

PokedexHeader.propTypes = {
  close: PropTypes.func.isRequired,
}

export default PokedexHeader
