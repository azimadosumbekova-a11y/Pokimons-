import { useState, useEffect } from "react"
import axios from "axios"

const useFetchPokemon = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)

      try {
        const respons = await axios.get(url)

        console.log(respons.data)
        setData(respons.data.results)

        setLoading(false)

      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()

  }, [url])

  return { data, loading, error }
}

export default useFetchPokemon
