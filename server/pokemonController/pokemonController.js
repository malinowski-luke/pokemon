const caughtPokemon = []
let id = 0

module.exports = {
  getCaughtPokemon: (req, res) => {
    res.status(200).send(caughtPokemon)
  },
  catchPokemon: (req, res) => {},
  editPokemonName: (req, res) => {},
  releasePokemon: (req, res) => {}
}
