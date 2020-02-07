import React, { Component } from 'react'

export default class Grass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grassClicked: false
    }
  }

  checkGrass() {}

  render() {
    const { pokemon, catchPokemonFn } = this.props
    return (
      <div>
        <p>{pokemon.name}</p>
        <img
          src={pokemon.sprites.front_default}
          onClick={() => {
            catchPokemonFn({
              name: pokemon.name,
              image: pokemon.sprites.front_default
            })
          }}
        />
      </div>
    )
  }
}
