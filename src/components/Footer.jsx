import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4 border-neutral-100">
        <div className="flex space-x-6 mb-5 ">

          <a className="size-10"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook Page">
            <img src={facebook} alt="Facebook" />
          </a>

          <a className="size-10"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter Page">
            <img src={twitter} alt="Twitter" />
          </a>

          <a className="size-10"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram Page">
            <img src={instagram} alt="Instagram" />
          </a>

        </div>
        <p className="text-sm text-neutral-500">&copy; 2025 BrickBloom. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer