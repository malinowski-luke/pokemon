const express = require('express')
const cors = require('cors')
const grassCtrl = require('./grassController/grassController')
const pokemonCtrl = require('./pokemonController/pokemonController')

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())

//endpoints---------
app.get('/api/wild-pokemon', grassCtrl.getWildPokemon)
//get locally stored pokemon arr
app.get('/api/pokemon', pokemonCtrl.getCaughtPokemon)
app.post('/api/pokemon', pokemonCtrl.catchPokemon)
app.put('/api/pokemon/:id', pokemonCtrl.editPokemonName)
app.delete('/api/pokemon/:id', pokemonCtrl.releasePokemon)

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`))
