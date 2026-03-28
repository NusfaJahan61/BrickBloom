import { PORTFOLIO_PROJECTS } from "../constants"

const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 border-neutral-100" id="portfolio">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl tracking-widest uppercase mb-20 mt-12 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div className="group relative overflow-hidden rounded-3xl mx-4 " key={project.id}>
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={project.image} alt={project.name} />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-2 text-xl font-medium">{project.name}</h3>
                <p className="text-black text-center px-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio