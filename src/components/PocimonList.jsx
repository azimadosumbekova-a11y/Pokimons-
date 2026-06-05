import React from 'react'
import useFetchPokemons from '../hooks/useFetchPokemons'
import Loader from './Loader'
import PocimonCard from "./PocimonCard"




export default function PocimonList() {

  const {
    data: pokemons,
    loading,
    error
  } = useFetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=1000")
  if (loading && !pokemons.length) {
    return <Loader />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div className="pokemon-list">

      {pokemons.map((pokemon) => ( 
        <PocimonCard
          key={pokemon.name}
          name={pokemon.name}
          url={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}` 
          }
        />
      ))}
    </div>
  
  )
}