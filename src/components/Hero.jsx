import React from 'react'
import { HERO_CONTENT } from '../constants'

const Hero = () => {
  return (
    <section className='max-w-7xl mx-auto border-b-2 border-neutral-100 '>
      <div className='flex flex-col items-center my-20 '>
        <h1 className="text-4xl tracking-widest sm:text-6xl lg:text-[10rem] uppercase font-bold sm:tracking-wider">
          BRICKBLOOM
        </h1>
        <p className="lg:mt-6 text-sm lg:text-lg lg:font-light mb-4 text-center text-gray-500 font-medium">
          {HERO_CONTENT.subtitle}
        </p>
        <img src={HERO_CONTENT.image} className='w-full h-[65vh] object-cover rounded-2xl p-2' alt="heroImage" />
      </div>
    </section>
  )
}

export default Hero