import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'

function App() {

  return (
    <main className='overflow-x-hidden antialiased text-neutral-800  '>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
    </main>
  )
}

export default App
