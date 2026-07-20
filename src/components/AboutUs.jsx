import aboutus from "../assets/home.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      className='px-4 sm:px-12 lg:px-24 xl:px-40  text-white font-medium text-2xl py-10  mb-20 bg-primary max-sm:mt-70'
      id='About-us'>
      <div className=' flex justify-center items-center lg:gap-20 sm:gap-0 md:gap-0 max-sm:gap-0 md:flex-col lg:flex-row sm:flex-col max-sm:flex-col'>
        <div>
          <img src={aboutus} className='w-1000 py-10' data-aos='fade-down' />
        </div>

        <div className='flex flex-col gap-5 max-sm:text-base md:text-lg'>
          <div data-aos='fade-left'>
            <h2 className='font-extrabold pb-1.5 text-2xl'>About us</h2>
            EPSF-Benisuef is a student organization dedicated to empowering
            pharmacy students at Beni-Suef University both academically and
            professionally. Through workshops, scientific events, awareness
            campaigns, and development programs, we create opportunities that
            bridge the gap between education and real-world practice.
          </div>
          <Link to='/explore'>
            <button
              data-aos='fade-left'
              className='w-40 h-15 rounded-2xl text-xl bg-white hover:bg-gray-200 text-primary font-bold  mx-auto lg:left-250 lg:top-[-30px] md:left-100 md:top-10  cursor-pointer sm:top-10 max-sm:top-10 '
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Explore more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
