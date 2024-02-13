import { RouterProvider } from 'react-router-dom'
import router from '../Routes'
import { useState, type ReactElement } from 'react'
import DarkModeContext from '../context/DarkModeContext'

const DarkModeProvider = (): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  return (
    <div>
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            <RouterProvider router={router}/>
        </DarkModeContext.Provider>
    </div>
  )
}

export default DarkModeProvider
