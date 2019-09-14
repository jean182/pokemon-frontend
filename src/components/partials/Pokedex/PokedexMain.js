import React from "react"

const PokedexMain = () => {
  return (
    <div className="pokedex-screen p-3 mt-3">
      <div className="d-flex justify-content-center">
        <div className="pokedex-upper-button mr-3"></div>
        <div className="pokedex-upper-button"></div>
      </div>
      <div className="pokedex-picture m-4">
        <img
          src="https://thumbs.gfycat.com/FixedFlusteredAlligatorsnappingturtle.webp"
          alt="gengar"
          height="140"
        />
      </div>
      <div className="d-flex justify-content-between mx-4">
        <div className="pokedex-screen-button"></div>
        <div className="pokedex-speakers">
          <div className="pokedex-speaker-line mb-2"></div>
          <div className="pokedex-speaker-line mb-2"></div>
          <div className="pokedex-speaker-line mb-2"></div>
          <div className="pokedex-speaker-line mb-2"></div>
        </div>
      </div>
    </div>
  )
}

export default PokedexMain
