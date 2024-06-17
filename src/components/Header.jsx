// src/components/Header.jsx
import ThemeToggle from '../components/ThemeToggle'

const Header = () => {
  return (
    <header className='w-full flex justify-between px-12 py-6 shadow-lg dark:bg-gray-700'>
      <div>
        <p className='font-bold dark:text-white'>Where in the World?</p>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
