import React, { Component } from 'react'
import Grass from './Grass'
import axios from 'axios'
import './Finder.css'

export default class Finder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wildPokemon: []
    }
  }

  componentDidMount() {
    axios.get('/api/wild-pokemon').then(res => {
      this.setState({
        wildPokemon: res.data
      })
    })
  }

  render() {
    const { catchPokemonFn } = this.props
    const pokemonList = this.state.wildPokemon.map(element => {
      return (
        <Grass
          key={element.id}
          catchPokemonFn={catchPokemonFn}
          pokemon={element}
        />
      )
    })
    return <div className='Finder'>{pokemonList}</div>
  }
}
