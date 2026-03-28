import { CONTACT_INFO } from "../constants"

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto " id="contact">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-widest mb-12 text-center uppercase ">Contact us</h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto text-neutral-600">{CONTACT_INFO.text}</p>

        <div className="flex flex-col lg:flex-row justify-around mx-10">
          <div className="flex mb-8 lg:mb-0 ">
            <div className="text-2xl mr-4 ">📞</div>
            <div>
              <p className="text-lg font-semibold ">{CONTACT_INFO.phone.label}</p>
              <p className="text-neutral-500">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>

          <div className="flex mb-8 lg:mb-0">
            <div className="text-2xl mr-4 ">✉️</div>
            <div>
              <p className="text-lg font-semibold ">{CONTACT_INFO.email.label}</p>
              <p className="text-neutral-500">{CONTACT_INFO.email.value}</p>
            </div>
          </div>

          <div className="flex mb-8 lg:mb-0 ">
            <div className="text-2xl mr-4 ">📍</div>
            <div>
              <p className="text-lg font-semibold ">{CONTACT_INFO.address.label}</p>
              <p className="text-neutral-500">{CONTACT_INFO.address.value}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
