import React, { Component } from 'react'

export default class Grass extends Component {
  constructor() {
    super()
    this.state = {
      grassClicked: false
    }
  }

  checkGrass = () => {}

  render() {
    return <div>Grass.js</div>
  }
}
