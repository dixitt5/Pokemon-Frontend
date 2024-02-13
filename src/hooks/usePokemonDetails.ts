import axios from 'axios'
import { useEffect, useState } from 'react'
import { type PokemonDetailsApi } from '../types/Pokemon'

export const usePokemonDetails = (id: string | undefined): {
  pokemonDetails: PokemonDetailsApi
  isLoading: boolean
  error: any
} => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsApi>({
    name: '',
    id: 0,
    imageUrl: '',
    weight: 0,
    level: 0,
    created_at: new Date()
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    axios.get(`http://localhost:8080/pokemons/search?id=${id}`).then((response) => {
      const result: PokemonDetailsApi = response.data
      setPokemonDetails(result)
      setIsLoading(false)
    }).catch(error => {
      setError(error)
      setIsLoading(false)
    })
  }, [])

  return { pokemonDetails, isLoading, error }
}
