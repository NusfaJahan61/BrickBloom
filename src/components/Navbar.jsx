import { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <img src='./src/assets/logo.png' alt="Logo" className="h-20 w-20" />
      <div className={` md:hidden ${!isOpen ? 'block' : 'hidden'}`}>
        <button onClick={() => toggleMenu()} className="text-gray-500 focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block flex-col bg-gray-700 border border-gray-600 ' : 'hidden '} md:flex md:items-center md:space-x-6 `}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar