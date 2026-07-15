import aboutus from '../assets/home.jpg'
import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40  text-white font-medium text-2xl py-10  bg-primary max-sm:mt-70' id="About-us">
    <div  className=' flex justify-center items-center gap-20 md:flex-col lg:flex-row sm:flex-col max-sm:flex-col'>
         <div><img src={aboutus} className='w-1000 mt-20' /></div>

      <div className='flex flex-col gap-5'>
        <div >   
           <h2 className='font-extrabold pb-1.5'>About us</h2>
EPSF-Benisuef  is a student organization dedicated to empowering pharmacy students at Beni-Suef University both academically and professionally.
Through workshops, scientific events, awareness campaigns, and development programs, we create opportunities that bridge the gap between education and real-world practice.
</div>
          <Link to='/explore'>
      <button className='w-40 h-15 rounded-2xl text-xl bg-white hover:bg-gray-200 text-primary font-bold  mx-auto lg:left-250 lg:top-[-30px] md:left-100 md:top-10  cursor-pointer sm:top-10 max-sm:top-10 'onClick={window.scrollTo({top:0, behavior:"smooth"})}>Explore more</button>
      </Link>

      </div>

    </div>


    </div>
  )
}

export default AboutUs
