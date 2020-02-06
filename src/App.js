import React, { Component } from 'react'
import Header from './Components/Header'
import Finder from './Components/Finder'
import Pokedex from './Components/Pokedex'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      caughtPokemon: []
    }
  }

  componentDidMount() {}
  catchPokemon = pokemon => {}
  saveName = (id, newName) => {}
  releasePokemon = id => {}

  render() {
    return (
      <div className='App'>
        hello
        {/* <Header /> */}
        <Finder />
        <Pokedex />
      </div>
    )
  }
}
