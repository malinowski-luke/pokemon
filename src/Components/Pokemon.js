import React, { Component } from 'react'

class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      userInput: ''
    }
  }

  toggleEdit = () => {}

  handleChange = event => {}

  render() {
    return <div>Pokemon.js</div>
  }
}

export default Pokemon
