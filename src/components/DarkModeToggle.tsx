import { useState, type ReactElement, useEffect } from 'react'

const DarkModeToggle = (): ReactElement => {
  const [theme, setTheme] = useState<string>(localStorage.theme as string)
  const colorTheme = theme === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme)
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    if (localStorage.theme === 'dark') { localStorage.removeItem('theme') } else localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return (
    <div>
      <label
        htmlFor="toggleTwo"
        className="flex items-center cursor-pointer select-none text-dark dark:text-white"
      >
        <div className="relative h-10 w-10" onClick={() => { setTheme(colorTheme) }}>
          {
            theme !== 'light'
              ? <img src="https://cdn0.iconfinder.com/data/icons/multimedia-solid-30px/30/moon_dark_mode_night-256.png" height={40} width={40} alt='darkmode'/>
              : <img src="https://cdn1.iconfinder.com/data/icons/weather-306/100/Icon_13-2-61_1-256.png" height={60} width={60} alt='lightmode'/>
          }
        </div>
      </label>
    </div>
  )
}

export default DarkModeToggle
