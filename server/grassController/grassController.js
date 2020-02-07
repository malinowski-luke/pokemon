const axios = require('axios')

module.exports = {
  getWildPokemon: (req, res) => {
    const pokemonArray = []
    const rand1 = Math.ceil(Math.random() * 151)
    const rand2 = Math.ceil(Math.random() * 151)
    const rand3 = Math.ceil(Math.random() * 151)
    // res response not to confuse res with axios response
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
      .then(response => {
        pokemonArray.push(response.data)
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
          .then(response => {
            pokemonArray.push(response.data)
            axios
              .get(`https://pokeapi.co/api/v2/pokemon/${rand3}`)
              .then(response => {
                pokemonArray.push(response.data)
                res.status(200).send(pokemonArray)
              })
              .catch(err => console.log(`failed to get rand3 pokemon ${err}`))
          })
          .catch(err => console.log(`failed to get rand2 pokemon ${err}`))
      })
      .catch(err => console.log(`failed to get rand1 pokemon ${err}`))
  }
}
