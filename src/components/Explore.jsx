import exploreMore from "../assets/exploreMore.jpeg";
import goals from "../assets/goals.jpeg";
import syndicate from "../assets/syndicate.jpeg";
import epsfLogo from "../assets/EPSF LOGO.jpeg"
import emroLogo from "../assets/EMRO.jpeg"
const Explore = () => {
  return (
    <div
      className='px-4 sm:px-12 lg:px-24 xl:px-40 py-10 '
      data-aos='fade-down'>
      <div data-aos='fade-down'>
        <h2 className='font-extrabold pb-5 text-primary text-3xl text-center  '>
          Legal Status
        </h2>
        <div className='text-center font-bold text-base pb-10'>
          EPSF-BeniSuef is an independent student entity that brings together
          pharmacy students and graduates of the Faculty of Pharmacy at
          Beni-Suef University, up to four years after graduation.
        </div>
        <div className='flex gap-10 max-sm:flex-col' data-aos='fade-down'>
          <div className='flex-col flex gap-5 '>
            <img src={syndicate} className='w-50 mx-auto rounded-full' />
            <div className='text-center font-medium  sm:text-sm lg:text-base'>
              EPSF operates under the supervision of the General Syndicate of
              Pharmacists of Egypt, making our office part of a nationally
              recognized professional structure that supports pharmacy students
              across Egypt.{" "}
            </div>
          </div>
          <div className='flex-col flex gap-5 '>
            <img src={epsfLogo} className='w-50 mx-auto rounded-full' />
            <div className='text-center font-medium  sm:text-sm lg:text-base'>
              Our office operates under the direct supervision of the Egyptian
              Pharmaceutical Students' Federation (EPSF). We actively
              participate in EPSF's activities and major events across the
              country.
            </div>
          </div>
          <div className='flex-col flex gap-5'>
            <img src={emroLogo} className='w-50 mx-auto rounded-full' />
            <div className='text-center font-medium sm:text-sm lg:text-base'>
              As part of EPSF, we are connected to the International
              Pharmaceutical Students' Federation (IPSF) and its Eastern
              Mediterranean Regional Office (EMRO), giving our members access to
              a global pharmaceutical student network.{" "}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='font-extrabold pb-10 pt-10 text-primary text-2xl '>
          Our Foundations
        </h2>
        <div>
          <img src={exploreMore} className='w-2/3 mx-auto' />
        </div>

        <ul className='pt-10 text-gray-700 font-medium text-xl'>
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
            We maintain close and collaborative relationships with the Students'
            Association and the Egyptian Pharmaceutical Students' Union,
            operating in line with the Union's bylaws.
          </li>
          <li className='pb-2.5'>
            Our office is guided by a strategic plan developed by the board and
            members, driven by clear Key Performance Indicators (KPIs) that are
            reviewed and approved by the General Assembly.
          </li>
        </ul>
      </div>
      <div>
        <h2 className='font-extrabold pb-10 pt-10 text-primary text-2xl '>
          Our Goals
        </h2>
        <div>
          <img src={goals} className='w-2/3 mx-auto' />
        </div>

        <ul className='pt-10 text-gray-700 font-medium text-xl'>
          <li className='pb-2.5'>
            Empowering Students — We give pharmacy students the platform to
            engage in scientific, cultural, and social activities.
          </li>
          <li className='pb-2.5'>
            Raising Standards — We work to elevate the scientific and cultural
            level of both our members and pharmacy students at large.
          </li>
          <li className='pb-2.5'>
            Building Connections — We strengthen ties between pharmacy students
            across different universities, creating space to exchange
            perspectives on topics that matter to them.
          </li>
          <li className='pb-2.5'>
            Global Exchange — Through IPSF's international student exchange
            program, we open doors for our students to train abroad, while
            welcoming international students to Egypt. This exchange fosters the
            sharing of expertise, culture, and ideas around pharmaceutical
            issues, and builds valuable cross-cultural experience.
          </li>
          <li className='pb-2.5'>
            Knowledge Sharing — We organize local and regional seminars and
            conferences that bring together diverse perspectives and elevate the
            academic level of students.
          </li>
          <li className='pb-2.5'>
            Strategic Partnerships — We seek out collaborative opportunities
            with other organizations that align with and support our vision and
            mission.
          </li>
          <li className='pb-2.5'>
            Community Impact — We are committed to community service through:
            <br></br>- Humanitarian projects that address real community needs
            and fulfill our social responsibility.<br></br>- Spreading health,
            cultural, and scientific awareness through the role of the
            pharmacist, launching projects and campaigns that reflect our
            commitment to the community.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;
