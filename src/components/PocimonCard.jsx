import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PocimonCard({ name, url }) {

  const [pokemonData, setPoemonData] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setPoemonData(response.data)

      } catch (error) {
        console.log("Error fetching data:", error)
      }
    }

    fetchData()

  }, [url])

  return (
    <div className='pocemon-card'>
      <h3>{name}</h3>

      {pokemonData && (
        <div className="pokemon-details">

          <img
            src={pokemonData.sprites.front_default}
            alt={name}
          />

         

        </div>
      )}
    </div>
  )
}