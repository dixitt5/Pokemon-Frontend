import axios from 'axios'
import { type PokemonDetailsApi, type PokemonApi } from './types/Pokemon'

export const fetchPokemons = async (): Promise<PokemonApi[]> => {
  const result = (await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')).data.results
  return result.map((p: PokemonApi, index: number) => ({ ...p, id: index + 1 }))
}

export const fetchPokemonDetails = async (id: number): Promise<PokemonDetailsApi> => {
  const result = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
  const pokemonObject = {
    name: result.name,
    url: result.url,
    id: result.id,
    weight: result.weight,
    level: result.level,
    imageUrl: result.imageUrl,
    created_at: result.created_at
  }
  return pokemonObject
}
