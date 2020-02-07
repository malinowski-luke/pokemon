import React from 'react'
import Pokemon from './Pokemon'
import './Finder.css'
export default function Pokedex(props) {
  const { caughtPokemon, releasePokemonFn, saveNameFn } = props
  let pokedex = caughtPokemon.map(elm => {
    return (
      <Pokemon
        key={elm.id}
        pokemon={elm}
        releasePokemonFn={releasePokemonFn}
        saveNameFn={saveNameFn}
      />
    )
  })
  return (
    <>
      <div>
        <h2>Pokedex</h2>
      </div>
      <div className='Finder'>{pokedex}</div>
    </>
  )
}
