import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
