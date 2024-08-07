import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa"
import IconButton from "./IconButton"

export default function FooterMessage() {
    return (<div className="w-full lg:w-6/12 px-4">
      <h4 className="text-3xl text-orange-600">Let{"'"}s keep in touch!</h4>
      <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
        Find us on any of these platforms, we respond 1-2 business days.
      </h5>
      <div className="mt-6 lg:mb-0 mb-6 flex gap-2">
        <IconButton><FaTwitter /></IconButton>
        <IconButton><FaFacebook /></IconButton>
        <IconButton><FaDribbble /></IconButton>
        <IconButton><FaGithub /></IconButton>
  
      </div>
    </div>)
  }
  