import { useEffect, useState } from 'react'
import { PokeCard } from '../components/Card'
// import { usePokemonsApi } from '../hooks/usePokemonsApi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { type PokemonApi } from '../types/Pokemon'

export interface PokemonProps {
  setRoute: (route: string) => void
};

function App (): JSX.Element {
  const navigate = useNavigate()
  // const { pokemons, isLoading, error } = usePokemonsApi()
  const [pokemons, setPokemons] = useState<PokemonApi[]>([])
  const [error, setError] = useState<any>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // const handleInfiniteScroll = async (): Promise<void> => {
  //   try {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       setScroll((prev) => prev + 1)
  //       setOffset((prev) => prev + 10)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   // Attach the scroll event directly to the window
  //   window.onscroll = handleInfiniteScroll

  //   return () => {
  //     // Remove the scroll event listener when the component unmounts
  //     window.onscroll = null
  //   }
  // }, [])

  // useEffect(() => {
  //   void fetchMoreData()
  // }, [scroll])

  // const fetchMoreData = async (): Promise<void> => {
  // setIsScrollLoading(true)
  // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`).then((response) => {
  //   const pokes: PokemonApi[] = response.data.results.map((p: PokemonApi, index: number) => ({ ...p, id: offset - 10 + index + 1 }))
  //   setPokemons((prevPokemons: PokemonApi[]) => [...prevPokemons, ...pokes])
  //   console.log(pokemons.length)
  //   setIsScrollLoading(false)
  // console.log('fetching more data')
  // }).catch((error) => {
  //   setError(error)
  // })
  // }

  useEffect(() => {
    const fetchPokemons = (): void => {
      setIsLoading(true)
      // axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then((response) => {
      axios.get('http://localhost:8080/pokemons').then((response) => {
        console.log(response.data)
        const pokes: PokemonApi[] = response.data.map((p: PokemonApi) => ({ ...p }))
        setPokemons(pokes)
        setIsLoading(false)
      }).catch((error) => {
        setError(error)
      })
    }
    fetchPokemons()
  }, [])

  return (
    <>
        {
      error !== null && (<div>{error.message}</div>)}

      {
      isLoading
        // eslint-disable-next-line multiline-ternary
        ? (
        <div className="flex flex-col mt-6 h-100 my-auto justify-center items-center">

<div role="status">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>

            <h3 className="mb-0">Loading...</h3>
          </div>
          ) : (
        <div className="bg-white dark:bg-gray-700">
          <div className="p-2 mx-4">
            <div className="grid lg:grid-cols-5 gap-3 md:grid-cols-3">
              {pokemons.map((pokemon) => (
                <div key={pokemon.id} onClick={() => {
                  navigate(`${pokemon.id}`)
                } }>
                  <PokeCard pokemon={pokemon} />
                </div>
              ))}
            </div>
            {/* <div className='flex flex-row justify-center'>{isScrollLoading ? <div className='bg-black  text-white my-4 p-2 rounded-md'>Loading...</div> : ''}</div> */}

          </div>
          {/* Buttons- Next Previous Change Route */}
          {/* <div className="d-flex justify-content-center mb-3">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  changePokemon(false)
                }}
              >
                Prev
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  changePokemon(true)
                }}
              >
                Next
              </button>
              <button>
                Change Route
              </button>
            </div>
          </div> */}
        </div>
          )}
    </>
  )
}

export default App
