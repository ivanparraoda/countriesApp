// src/components/ThemeToggle.jsx
import { useContext } from 'react'
import ThemeContext from '../ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme} className='dark:text-white'>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

export default ThemeToggle
