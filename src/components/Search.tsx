import axios from 'axios'
import { useRef, type ReactElement, useState } from 'react'
import { type PokemonDetailsApi } from '../types/Pokemon'

const Search = (): ReactElement => {
  const nameRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<any>()
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsApi>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [dataFetched, setDataFetched] = useState<boolean>(false)

  const fetchPokemon = (): void => {
    try {
      setIsLoading(true)
      const name = nameRef?.current?.value
      axios.get(`http://localhost:8080/pokemons/search/${name}`).then((response) => {
        // console.log(response.data)
        const result: PokemonDetailsApi = response.data[0]
        console.log(result)
        setPokemonDetails(result)
        setIsLoading(false)
        setDataFetched(true)
      }).catch((error: any) => {
        setError(error)
      })
    } catch (error) {
      console.error(error)
    }
  }

  function convertTimestamp (timestamp: Date | undefined): string {
    const d = new Date(timestamp ?? new Date())
    const year = d.getFullYear()
    const month = d.getMonth()
    const date = d.getDate()
    const hours = d.getHours()
    const minutes = d.getMinutes()
    const seconds = d.getSeconds()
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
  }

  return (
    <div>
    <div className="flex flex-col items-center text-light h-[100%] dark:bg-gray-700 bg-white justify-center">
      <h1 className='mt-6 text-4xl font-bold'>Pokemon Search</h1>
      <div className="flex flex-col w-[35%] sm:flex-col sm:justify-center sm:items-center md:flex-col md:justify-end lg:flex-row lg:justify-end lg:items-center lg:gap-4 xl:flex-row xl:justify-around justify-around rounded-xl p-5 mx-2 my-6 shadow-xl bg-white dark:bg-gray-300 text-black">
        <div className='flex flex-row gap-3'>
        <input type='text' className='p-2 border border-black' ref={nameRef}/>
        <button onClick={fetchPokemon} className='bg-black text-white p-2 rounded-md'>Search</button>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center text-light h-[100%] dark:bg-gray-700 bg-white justify-center">
        {/* <h1>Pokemon Details</h1> */}
        {error !== null && (<div>{error}</div>)}
        {
          !isLoading && dataFetched &&
            (
              <div className="flex w-auto flex-col sm:flex-col sm:justify-center sm:items-center md:flex-col md:justify-end lg:flex-row lg:justify-end lg:items-center lg:gap-4 xl:flex-row xl:justify-around justify-around rounded-xl p-5 mx-2 my-6 shadow-xl bg-white dark:bg-gray-300 text-black">
                <div><img className="bg-contain border border-black p-4 rounded-md" src={pokemonDetails?.imageUrl} alt={pokemonDetails?.name} /></div>
                <div className='flex flex-col gap-3'>
                <h2 className='text-xl font-semibold'><span className='font-bold'>ID:</span> {pokemonDetails?.id}</h2>
                <h2 className='text-xl font-semibold'><span className='font-bold'>Name:</span> {(pokemonDetails?.name)}</h2>
                <h2 className='text-xl font-semibold'><span className='font-bold'>Level:</span> {(pokemonDetails?.level)}</h2>
                <h2 className='text-xl font-semibold'><span className='font-bold'>Weight:</span> {pokemonDetails?.weight}</h2>
                <h2 className='text-xl font-semibold'><span className='font-bold'>Created At:</span> {convertTimestamp(pokemonDetails?.created_at).toString()}</h2>
                </div>
              </div>
            )

            }
            {isLoading && (
            <h2 className='dark:text-white dark:bg-teal-400 p-2 rounded-md bg-gray-200'>Loading...</h2>)}

    </div>
    </div>
  )
}

export default Search
