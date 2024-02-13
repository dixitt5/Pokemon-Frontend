import { type ReactElement } from 'react'
import DarkModeToggle from './DarkModeToggle'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ flag }: { flag: boolean }): ReactElement => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-row justify-between font-semibold dark:bg-green-800 dark:text-white bg-blue-400 text-black p-4 items-center">
      <h1 onClick={() => { navigate('/pokemons') } } className="text-4xl mx-3 cursor-pointer">Pokemons {flag ? 'Page' : 'Details'}</h1>
      <div className='flex flex-row items-center gap-4 p-4  '>
        <div className='text-xl cursor-pointer hover:underline' onClick={() => { navigate('search') }}>Search</div>
        <DarkModeToggle/></div>
      {/* <button className='btn btn-secondary' onClick={() => { setIsDarkMode(!isDarkMode) }}>Change</button> */}
    </div>
  )
}

export default Navbar
