import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import Services from './components/Services'

function App() {

  return (
    <main className='overflow-x-hidden antialiased text-neutral-800  '>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Reviews />
      <Contact />
    </main>
  )
}

export default App
