import  Form  from "../components/Form"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40  text-white font-medium text-2xl py-10  bg-primary max-sm:mt-70' id="Contact-us">
      <div className="flex justify-center items-center gap-10 md:gap-5 sm:gap-5 max-sm:gap-5 md:flex-col lg:flex-row sm:flex-col max-sm:flex-col">
<div>
  <h2 className="font-extrabold pb-4 text-4xl ">  Let's get in Touch!
</h2>
We'd love to hear from you. Send us your inquiry, and we'll respond as soon as we can.
<div className="pt-20">
  <ul className="max-sm:text-xl">
    <li className="mb-4"><FaPhoneAlt className="inline  mr-3.5" />+20 10 67920405</li>
    <li><MdEmail className="inline  mr-3.5" />md.epsf.benisuef@gmail.com</li>
  </ul>
</div>
</div>
<Form/>
  </div>      
    </div>
  )
}

export default ContactUs
