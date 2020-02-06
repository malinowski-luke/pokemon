const caughtPokemon = []
let id = 0

module.exports = {
  getCaughtPokemon: (req, res) => {
    res.status(200).send(caughtPokemon)
  },
  catchPokemon: (req, res) => {
    const { pokemon } = req.body
    pokemon.id = id
    id++
    caughtPokemon.push(pokemon)
    res.status(200).send(caughtPokemon)
  },
  editPokemonName: (req, res) => {
    const { id } = req.params
    const { name } = req.body
    let index = caughtPokemon.findIndex(elm => elm.id === +id)
    caughtPokemon[index].name = name
    res.status(200).send(caughtPokemon)
  },
  releasePokemon: (req, res) => {
    const { id } = req.params
    let index = caughtPokemon.findIndex(elm => elm.id === +id)
    caughtPokemon.splice(index, 1)
    res.status(200).send(caughtPokemon)
  }
}
