import { useEffect, useState } from 'react'
import { type PokemonApi } from '../types/Pokemon'
import axios from 'axios'

export const usePokemonsApi = (): {
  pokemons: PokemonApi[]
  isLoading: boolean
  error: any
} => {
  const [pokemons, setPokemons] = useState<PokemonApi[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10').then((response) => {
      const pokes: PokemonApi[] = response.data.results.map((p: PokemonApi, index: number) => ({ ...p, id: index + 1 }))
      setPokemons(pokes)
      setIsLoading(false)
    }).catch((err) => {
      setError(err)
    })
  }, [])

  return { pokemons, isLoading, error }
}
