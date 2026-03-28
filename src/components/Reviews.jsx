import { REVIEWS } from '../constants'
const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 border-neutral-100" id='reviews'>
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-widest mb-12 text-center uppercase ">Reviews</h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto text-neutral-600">{REVIEWS.text}</p>
        <div className="flex flex-wrap justify-center gap-8">
          {REVIEWS.reviews.map((reviews, index) => (
            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs" key={index}>
              <div className="flex items-center mb-2 mr-auto ">
                <img className='h-12 w-12 rounded-full mr-4' src={reviews.image} alt={reviews.name} />
                <div className="">
                  <p className="text-sm font-bold">{reviews.name}</p>
                  <p className="text-sm text-neutral-500">{reviews.title}</p>
                </div>
              </div>
              <p className="mt-4">{reviews.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews