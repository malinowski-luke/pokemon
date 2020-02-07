import React, { Component } from 'react'
import './Pokemon.css'
export default class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      userInput: ''
    }
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleChange = e => {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    const { pokemon, releasePokemonFn, saveNameFn } = this.props
    const { isEditing, userInput } = this.state
    return (
      <div className='Pokemon'>
        {isEditing ? (
          <>
            <input
              // value={userInput}
              onChange={this.handleChange}
              placeholder='enter new name'
            />
            <button
              onClick={() => {
                saveNameFn(pokemon.id, userInput)
                this.toggleEdit()
              }}
            >
              submit
            </button>
          </>
        ) : (
          <>
            <p onDoubleClick={this.toggleEdit}>{pokemon.name}</p>
          </>
        )}
        <img alt={pokemon.name} src={pokemon.image} />
        <button onClick={() => releasePokemonFn(pokemon.id)}>release</button>
      </div>
    )
  }
}
