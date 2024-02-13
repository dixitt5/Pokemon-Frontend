import { createContext } from 'react'

export interface ContextParameters {
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean | ((isDarkMode: boolean) => boolean)) => void
}

export default createContext<ContextParameters>({
  isDarkMode: false,
  setIsDarkMode: () => {}
})
