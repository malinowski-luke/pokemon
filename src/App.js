import React, { Component } from 'react'
import Header from './Components/Header'
import Finder from './Components/Finder'
import Pokedex from './Components/Pokedex'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      caughtPokemon: []
    }
  }

  componentDidMount() {
    axios.get('/api/pokemon').then(res => {
      this.setState({
        caughtPokemon: res.data
      })
    })
  }
  catchPokemon = pokemon => {
    axios.post('/api/pokemon', { pokemon }).then(res => {
      this.setState({
        caughtPokemon: res.data
      })
    })
  }
  saveName = (id, newName) => {
    axios.put(`/api/pokemon/${id}`, { name: newName }).then(res => {
      console.log(res.data)
      this.setState({
        caughtPokemon: res.data
      })
    })
  }
  releasePokemon = id => {
    axios.delete(`/api/pokemon/${id}`).then(res => {
      this.setState({
        caughtPokemon: res.data
      })
    })
  }

  render() {
    const { caughtPokemon } = this.state
    return (
      <div className='App'>
        <Header />
        <Finder catchPokemonFn={this.catchPokemon} />
        <Pokedex
          caughtPokemon={caughtPokemon}
          saveNameFn={this.saveName}
          releasePokemonFn={this.releasePokemon}
        />
      </div>
    )
  }
}
