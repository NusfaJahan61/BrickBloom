import { SERVICES_CONTENT } from "../constants"

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 border-neutral-100" id="services">
      <div className="my-20">
        <h1 className="text-xl lg:text-3xl xl:text-5xl font-bold tracking-tight text-center mb-20 uppercase">Our Home Renovation Services</h1>
        {SERVICES_CONTENT.map((services, index) => (
          <div className="mb-12 mx-4 flex flex-col lg:flex-row" key={index}>
            <div className={`lg:w-1/2 mb-4 lg:mb-0 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
              <img src={services.image} alt={services.title} className='w-full h-auto object-cover rounded-lg' /></div>
            <div className={`lg:w-1/2 flex flex-col ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
              <h3 className="text-xl lg:text-2xl font-medium mb-2 tracking-wide">{services.title}</h3>
              <p className="mb-4 text-[16px] lg:text-lg lg:leading-9">{services.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
