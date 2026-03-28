import { useState } from 'react'
import { LINKS } from '../constants'
import logo from '../assets/logo.webp'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='border-b-2 border-neutral-100'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-8'>
        <div className='pl-2'>
          <a href="#">
            <h1 className='text-2xl uppercase tracking-wide font-extrabold'>Brickbloom</h1>
            {/* <img src={logo} width={150} height={15} alt="Logo" /> */}
          </a>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"} >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        <div className='hidden md:flex space-x-8 md:space-x-4 pr-2 '>
          {LINKS.map((link, index) => (
            <a key={index} href={link.link} className='text-sm uppercase font-medium hover:text-neutral-600 transition duration-300' >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4 border-neutral-300`}>
        {LINKS.map((link, index) => (
          <a key={index} href={link.link} className='uppercase font-medium text-lg block py-2 tracking-wide hover:text-neutral-600'>
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar