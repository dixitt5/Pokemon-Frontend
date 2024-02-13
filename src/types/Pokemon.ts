export interface Pokemon {
  id: number
  name: string
  types: PokemonType[] | string[]
  height: number
  width: number
  URL: string
};

export interface PokemonApi {
  name: string
  id: number
  imageUrl: string
  created_at: Date
}

export interface PokemonDetailsApi extends PokemonApi {
  level: number
  weight: number
}

export interface Ability {
  name: string
  url: string
}

export interface PokemonAbilityDetailsApi {
  ability: Ability
  is_hidden: boolean
  slot: number
}

export enum PokemonType {
  Water,
  Fire,
  Rock,
  Other,
}
