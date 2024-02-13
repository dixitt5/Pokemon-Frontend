import { type ReactElement } from 'react'
import { type PokemonApi } from '../types/Pokemon'

export interface PokemonProps {
  pokemon: PokemonApi
}

function capitalisedName (name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1).trim()
}

export function PokeCard ({ pokemon }: Readonly<PokemonProps>): ReactElement {
  const { id, name, imageUrl } = pokemon
  return (
    <div className="my-4 mx-auto shadow-md rounded-md hover:shadow-md cursor-pointer bg-white dark:bg-gray-300 text-black">
      <div className="card-body text-center py-5">
        <img
          className="img-thumbnail mx-auto d-block mb-4"
          src={imageUrl}
          alt={name}
        />
        <h2 className="text-md">
          <span className="bg-teal-600 dark:bg-teal-800 text-white rounded-md p-0.5 pl-1 mr-1">
            #{id}{' '}
          </span>
          <a
            href={imageUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold dark:text-black"
          >
            {capitalisedName(name)}
          </a>
        </h2>

        {/* <p className="text-muted mb-3">{types.toString()}</p> */}
        <p className="mb-0">{/* Dimension: {height} x {width} */}</p>
      </div>
    </div>
  )
}
