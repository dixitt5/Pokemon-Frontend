import axios, { type AxiosResponse } from 'axios'
// import { type PokemonApi, type PokemonDetailsApi } from '../types/Pokemon'

export const responseInterceptor = (): void => {
  axios.interceptors.response.use((res: AxiosResponse<any, any>) => {
    const result = res.data
    if (!((res.config.url?.startsWith('https://pokeapi.co/api/v2/pokemon/?limit=')) ?? false) ?? true) {
      const abilities: string[] = result.abilities.map((ab: any) => ab.ability.name)
      const pokemonObject = {
        name: result.name,
        url: result.url,
        id: result.id,
        baseExperience: result.base_experience,
        height: result.height,
        weight: result.weight,
        abilities
      }
      res.data = pokemonObject
    }

    console.log(res.config.url)
    return res
  })
}
