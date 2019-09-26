import React, { Component } from "react"
import { connect } from "react-redux"
import _ from "lodash"
import {
  loadPokemon,
  sortedPokemon,
} from "../../redux/modules/pokemon/pokemonList"
import TableLoader from "./wrappers/TableLoader/TableLoader"
import Pokedex from "./Pokedex/Pokedex"
import PokedexMain from "./Pokedex/PokedexMain"

const modalProps = {
  ariaLabel: 'Pokedex Modal',
  triggerText: 'This is a button to trigger the Pokedex'
};

class PokemonList extends Component {
  componentDidMount() {
    const { fetchPokemon } = this.props
    fetchPokemon()
  }

  renderPokemonList = () => {
    const { isLoading, error, pokemon } = this.props
    if (isLoading) return <TableLoader />
    if (!_.isEmpty(error)) return <div>{error}</div>
    return (
      <React.Fragment>
        <Pokedex {...modalProps}>
          <PokedexMain />
        </Pokedex>
        <div className="row mb-2 p-2">
          <div className="col-3">Pokedex Number</div>
          <div className="col-3">Name</div>
          <div className="col-3">Height & Weight</div>
          <div className="col-3">Action</div>
        </div>
        {pokemon.map(mon => {
          return (
            <div className="row mb-2 p-2" key={mon.pokedexNumber}>
              <div className="col-3">{mon.pokedexNumber}</div>
              <div className="col-3">{mon.name}</div>
              <div className="col-3">
                {mon.height} & {mon.weight}
              </div>
              <div className="col-3">show</div>
            </div>
          )
        })}
      </React.Fragment>
    )
  }

  render() {
    return <div className="container">{this.renderPokemonList()}</div>
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPokemon: () => dispatch(loadPokemon()),
})

const mapStateToProps = state => ({
  pokemon: sortedPokemon(state),
  isLoading: state.pokemonReducer.isLoading,
  error: state.pokemonReducer.error,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList)
