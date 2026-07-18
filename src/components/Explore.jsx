import exploreMore from "../assets/exploreMore.jpeg";
import goals from "../assets/goals.jpeg";
import syndicate from "../assets/syndicate.jpeg";
import epsfLogo from "../assets/EPSF LOGO.jpeg"
import emroLogo from "../assets/EMRO.jpeg"
import logo from "../assets/logo.jpg";
import puzzle from "../assets/puzzle.jpeg"
const Explore = () => {
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40 py-10 '>
      <div className=''>
        <img
          src={logo}
          className='rounded-full mx-auto w-1/4'
          data-aos='fade-down'
        />
        <div
          className='mx-auto mt-7 font-bold text-center text-xl max-sm:text-sm border-b-2 border-gray-400 pb-10 mb-10'
          data-aos='fade-down'>
          {" "}
          "EPSF-BeniSuef (Egyptian Pharmaceutical Students' Federation – Beni
          Suef University) is a non-governmental, non-political, non-religious
          national organization leading the call among pharmacy students to
          improve public health, through information, education, communication,
          and a wide range of publications and activities dedicated to pharmacy.
          It is a member of the Egyptian Pharmaceutical Students' Federation,
          which represents Egypt in the International Pharmaceutical Students'
          Federation and its Eastern Mediterranean regional office.\+
        </div>
      </div>
      <div data-aos='fade-down' className='pb-20 '>
        <h2 className='font-extrabold pb-5 text-primary text-3xl text-center  '>
          Legal Status
        </h2>
        <div className='text-center font-bold text-base pb-10'>
          EPSF-BeniSuef is an independent student entity that brings together
          pharmacy students and graduates of the Faculty of Pharmacy at
          Beni-Suef University, up to four years after graduation.
        </div>
        <div className='flex gap-30 max-sm:flex-col' data-aos='fade-down'>
          <div className='flex-col flex  justify-center items-center gap-5'>
            <img src={syndicate} className='w-50 rounded-full' />
            <div className='text-center font-medium  sm:text-sm lg:text-base'>
              EPSF operates under the supervision of the General Syndicate of
              Pharmacists of Egypt, making our office part of a nationally
              recognized professional structure that supports pharmacy students
              across Egypt.{" "}
            </div>
          </div>
          <div className='flex-col flex  justify-center items-center gap-5 '>
            <img src={epsfLogo} className='w-50  rounded-full' />
            <div className='text-center font-medium  sm:text-sm lg:text-base'>
              Our office operates under the direct supervision of the Egyptian
              Pharmaceutical Students' Federation (EPSF). We actively
              participate in EPSF's activities and major events across the
              country.
            </div>
          </div>
          <div className='flex-col flex justify-center items-center gap-5'>
            <img src={emroLogo} className='w-50  rounded-full' />
            <div className='text-center font-medium sm:text-sm lg:text-base'>
              As part of EPSF, we are connected to the International
              Pharmaceutical Students' Federation (IPSF) and its Eastern
              Mediterranean Regional Office (EMRO), giving our members access to
              a global pharmaceutical student network.{" "}
            </div>
          </div>
        </div>
      </div>

      <div className='pb-20'>
        <h2 className='font-extrabold pb-5 text-primary text-3xl text-center  '>
          Our Foundations
        </h2>
        <div className='flex lg:flex-row-reverse max-sm:text-base md:text-lg max-sm:flex-col sm:flex-col md:flex-col'>
          <div>
            <img src={puzzle} className='w-2/3 mx-auto' data-aos='fade-left' />
          </div>

          <ul
            className=' font-medium md:text-lg max-sm:text-base list-disc'
            data-aos='fade-right'>
            <li className='pb-2.5'>
              Everything we do is rooted in science, culture, and social impact.
              EPSF-BeniSuef holds no political or religious affiliation, whether
              inside or outside the university campus, and proudly stands as a
              smoke-free organization.
            </li>
            <li className='pb-2.5'>
              We work to achieve our goals free from any racial, political, or
              religious discrimination.
            </li>
            <li className='pb-2.5'>
              We maintain close and collaborative relationships with the
              Students' Association and the Egyptian Pharmaceutical Students'
              Union, operating in line with the Union's bylaws.
            </li>
            <li className='pb-2.5'>
              Our office is guided by a strategic plan developed by the board
              and members, driven by clear Key Performance Indicators (KPIs)
              that are reviewed and approved by the General Assembly.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className='font-extrabold pb-5 text-primary text-3xl text-center  '>
          Our Goals
        </h2>

        <div className='flex lg:flex-row-reverse max-sm:text-base md:text-lg max-sm:flex-col sm:flex-col md:flex-col justify-between'>
          <div>
            <img src={goals} className='w-150 m-auto ' data-aos='fade-left' />
          </div>
          <ul
            className=' font-medium md:text-lg max-sm:text-base list-disc '
            data-aos='fade-right'>
            <li className='pb-2.5'>
              <strong>Empowering Students</strong> Supporting pharmacy students
              through scientific, cultural, and social activities.
            </li>
            <li className='pb-2.5'>
              <strong>Raising Standards</strong> Enhancing the scientific and
              professional level of pharmacy students.
            </li>
            <li className='pb-2.5'>
              <strong>Building Connections</strong> Strengthening collaboration
              among pharmacy students across universities.
            </li>
            <li className='pb-2.5'>
              <strong>Global Exchange</strong> Providing international training
              and cultural exchange opportunities through IPSF.
            </li>
            <li className='pb-2.5'>
              <strong>Knowledge Sharing</strong> Organizing seminars and
              conferences to enrich student learning.
            </li>
            <li className='pb-2.5'>
              <strong>Strategic Partnerships</strong> Collaborating with
              organizations that support our mission.
            </li>
            <li className='pb-2.5'>
              <strong>Community Impact</strong> Promoting health awareness and
              serving the community through meaningful initiatives.
            </li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explore;
