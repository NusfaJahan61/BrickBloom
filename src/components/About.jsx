import aboutImage from '../assets/about.webp'
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 border-neutral-100 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl xl:text-4xl uppercase tracking-widest mb-12 mx-4 text-center">About Us</h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          <img className='w-full h-auto xl:scale-120 xl:my-10' src={aboutImage} alt="About Brickbloom" />
        </div>
        <p className="text-lg lg:text-xl font-light text-center lg:text-left max-w-7xl mx-auto mt-8">
          At Brickbloom, we are passionate about creating unique and high-quality LEGO sets that inspire creativity and imagination. Our team of dedicated designers and builders work tirelessly to bring you the best possible LEGO experience. We believe that building with LEGO is not just a hobby, but a way to express yourself and connect with others. Whether you're a seasoned builder or just starting out, we have something for everyone. Join us on our journey to build a better world, one brick at a time. We are committed to providing exceptional customer service and ensuring that every LEGO set we create is of the highest quality. Thank you for choosing Brickbloom, and we look forward to building with you!
        </p>
      </div>
    </section>
  )
}

export default About