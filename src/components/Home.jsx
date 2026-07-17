import home from "../assets/full-logo-blue.png";
const Home = () => {
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40 flex justify-center items-center py-10 flex-col'>
      <div className='relative w-full flex justify-center items-center'>
        <img src={home} className=' opacity-25 mx-auto   max-h-screen ' />
        <div
          className='absolute text-4xl font-medium top-40 sm:border-b-4 border-gray-400 pb-5 max-sm:top-20 text-center'
          data-aos='fade-down'>
          <span className='text-primary font-bold'>EPSF-Benisuef</span> pharmacy
          is our passion
        </div>
        <div
          className='absolute text-xl font-medium top-60 text-gray-400 max-sm:hidden sm:top-70  md:top-60 lg:top-60 text-center '
          data-aos='fade-down'>
          Egyptian Pharmaceutical Students Federation, Beni Suef University.
        </div>
      </div>

      <div className='flex gap-20 justify-center items-center  mt-10  max-sm:flex-col max-sm:gap-10 absolute top-2/3 max-sm:top-7/12  '>
        <div
          className='p-[1px] bg-gradient-to-r from-primary to-white rounded-2xl transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110'
          data-aos='fade-right'>
          <div className=' block w-40 h-20  shadow-2xl rounded-2xl  bg-white flex justify-center items-center '>
            +100 Members
          </div>
        </div>

        <div
          className='border-primary block w-40 h-20  shadow-2xl rounded-2xl  bg-white flex justify-center items-center border-2 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110'
          data-aos='fade-down'>
          Est. 1998
        </div>

        <div
          className='p-[1px] bg-gradient-to-l from-primary to-white rounded-2xl transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 '
          data-aos='fade-left'>
          <div className='border-primary block w-40 h-20  shadow-2xl rounded-2xl  bg-white flex justify-center items-center text-center'>
            Serving +500 pharmacy Students
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
