import { type ReactElement } from 'react'
import { usePokemonDetails } from '../hooks/usePokemonDetails'
import { useParams } from 'react-router-dom'

function capitalisedName (name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1).trim()
}

// create a function that converts the timestamp into a date
function convertTimestamp (timestamp: Date): string {
  const d = new Date(timestamp)
  const year = d.getFullYear()
  const month = d.getMonth()
  const date = d.getDate()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()
  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
}

const Details = (): ReactElement => {
  const { id } = useParams()
  const { pokemonDetails, isLoading, error } = usePokemonDetails(id)
  return (
    <div className="flex flex-col items-center text-light h-[100%] dark:bg-gray-700 bg-white justify-center">
        {/* <h1>Pokemon Details</h1> */}
        {error !== null && (<div>{error.message}</div>)}
        {
          !isLoading
            ? (
              <div className="flex w-auto flex-col sm:flex-col sm:justify-center sm:items-center md:flex-col md:justify-end lg:flex-row lg:justify-end lg:items-center lg:gap-4 xl:flex-row xl:justify-around justify-around rounded-xl p-5 mx-2 my-6 shadow-xl bg-white dark:bg-gray-300 text-black">
                <div><img className="bg-contain border border-black p-4 rounded-md" src={pokemonDetails?.imageUrl} alt={pokemonDetails?.name} /></div>
                <div className='flex flex-col gap-3'>
                <h2 className='text-xl font-semibold'><span className='font-bold'>ID:</span> {pokemonDetails?.id}</h2>
                <h2 className='text-xl font-semibold'><span className='font-bold'>Name:</span> {capitalisedName(pokemonDetails?.name)}</h2>
                <h2 className='text-xl font-semibold'><span className='font-bold'>Level:</span> {pokemonDetails?.level.toString()}</h2>
                <h2 className='text-xl font-semibold'><span className='font-bold'>Weight:</span> {pokemonDetails?.weight}</h2>
                <h2 className='text-xl font-semibold'><span className='font-bold'>Created At:</span> {convertTimestamp(pokemonDetails?.created_at)}</h2>
                </div>
              </div>
              )
            : (
            <h2 className='dark:text-white dark:bg-teal-400 p-2 rounded-md bg-gray-200'>Loading...</h2>
              )
        }
    </div>
  )
}

export default Details
