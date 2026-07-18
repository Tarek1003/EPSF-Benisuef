import logo from "../assets/half-logo-white.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40  font-medium text-md pt-10 pb-5  bg-gray-900  flex max-sm:flex-col text-white gap-80 max-sm:gap-20 md:gap-40 lg:gap-40 xl:gap-80 sm:gap-20'>
      <div>
        <div className=' transition-all text-center flex flex-col items-center '>
          <img src={logo} className='w-40 ' /> <div>EPSF-Benisuef</div>
        </div>
      </div>
      <div className='flex-col flex text-center '>
        <h2 className='mb-5'>Links</h2>
        <Link
          to='/'
          onClick={() => {
            (
              window.scrollTo({ top: 0, behavior: "smooth" }));
          }}
          className='  hover:text-primary rounded-full text-base font-medium cursor-pointer  max-sm:text-white'
          href='#'>
          Home
        </Link>
        <Link
          to='/#About-us'
          className='  hover:text-primary rounded-full text-base font-medium cursor-pointer'
          href='#About-us'>
          About us
        </Link>
        <Link
          to='/#Structure'
          className='hover:text-primary rounded-full text-base font-medium cursor-pointer'
          href='#Structure'>
          Structure
        </Link>
        <Link
          to='/history'
          onClick={() => {
            (
              window.scrollTo({ top: 0, behavior: "smooth" }));
          }}
          className='hover:text-primary  rounded-full text-base font-medium cursor-pointer '
          href='#History'>
          History
        </Link>
        <Link
          to='/#Contact-us'
          className='hover:text-primary  rounded-full text-base font-medium cursor-pointer '
          href='#Contact-us'>
          Contact us
        </Link>
      </div>
      <div className='md:text-center max-sm:text-center'>
        <h2>Contact-us</h2>
        <div className='pt-5'>
          <ul className='max-sm:text-sm text-md'>
            <li className='mb-4'>
              <FaPhoneAlt className='inline  mr-3.5' />
              +20 10 67920405
            </li>
            <li>
              <MdEmail className='inline  mr-3.5' />
              md.epsf.benisuef@gmail.com
            </li>
          </ul>
          <div className='flex gap-3 mt-5 md:justify-center max-sm:justify-center'>
            <a href='https://www.facebook.com/epsf.benisuef?__cft__[0]=AZYTvLbGTPZ3cabK9p1-YOOqAOLFtqTZlAt0ez1DOdNnBJPa8AYprKnMu0ND260xC8BH4wS5AGsWkWsz_D1ip5KES2L0U2MSi0nbFhRIPxIhrsU_34YnKYGLZsfA9NEDFk80_CH0_dN-znPcEc3p5ZMtjaWMNxiSQPa14HqwfWZf5A&__tn__=-]K-R'>
              <FaFacebookF />
            </a>
            <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fepsf_benisuef%3Figsh%3DbjQ5MnZiaWpkdmRu%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExR0pHQkhRakcwclpKUWpZMHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7nbbFUf-hAdRzYcXTb9jjKN3LCDjU_IkwyG4HN9A-wrWgZ7S01cwb9jqIR5A_aem_M0Gl8bAbS9Uf06cbAOls1A&h=AUD7wntfa5BfBLcPqK_5W0Q3XHPx4UzlQNP32uPDMzo-lOTdyEX4JnsJVuk0W_yPIQjxdu2tBmKEY5pZduioViaR3gwX2lkkpV7LKL1JbiK-QEOpOwVzRa4UlC1BvYB39WtwCTc6niGR-rpg&__tn__=-UK-R&c[0]=AUDAwcAsnAUWwNI9t5DByMaxsE7kMe4lyrIUIMXS1p_k5c8aJXbiHudMMW6PKnjVdzCngFZgAd2Rq_4sAu1VmbnRezKiV37Nga7Ak-mBGFJZ3E1ilDBkcW5vzQoRGe_4wHrWcqqZfifEqe2H1OWGYTjhcfGmpkO-xAshBFTCMLVkFKSTKP4Yol4e6HmZMTM'>
              <FaInstagram />
            </a>
            <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fx.com%2FEPSF_BeniSuef%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExR0pHQkhRakcwclpKUWpZMHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4N67mY9NKOQaICafI9HfuQRaReZkTJXKQBSAmGNCP-VNb55Ro0iPzqSme8jQ_aem_-Gcv-4hVGjpYHyxKp9GWdw&h=AUCXV8eq-Fys2ruXb2t1hd7lLEGnAFr3sjU0i4mYfsGD7Yn54-ZM56ZSVkAfe7nvmhF29tzaj_j5ZSx-Hk5b5QiSAuW3dQX3yirw-BF5cm_1S-9f3rQeiwf4qRqmkU_fUh7-E8UdZw-bJLmu&__tn__=-UK-R&c[0]=AUDAwcAsnAUWwNI9t5DByMaxsE7kMe4lyrIUIMXS1p_k5c8aJXbiHudMMW6PKnjVdzCngFZgAd2Rq_4sAu1VmbnRezKiV37Nga7Ak-mBGFJZ3E1ilDBkcW5vzQoRGe_4wHrWcqqZfifEqe2H1OWGYTjhcfGmpkO-xAshBFTCMLVkFKSTKP4Yol4e6HmZMTM'>
              <BsTwitterX />
            </a>
            <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fepsf-benisuef%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExR0pHQkhRakcwclpKUWpZMHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6ercZx5cMTjNognV-dCr2zMBsNI0yWKHdL0n3TA4NwTDvsIsZ0ct6Dp-TdxA_aem_xT2BRlqO4rCIGIXdoWogpA&h=AUA3D7cWv1v98RkqBB9HilgJMJaRQFo6kXYp9SlbvCMvyaByBu-txGMUT0OjqA_2QhI1pOElOtWIJIpLH6vQsNy3ACuMehQ9PwNnCovXatPcBxrgM-AutOBJ9f6TTpYpl4DdHEXb8t8ik-VQ&__tn__=-UK-R&c[0]=AUDAwcAsnAUWwNI9t5DByMaxsE7kMe4lyrIUIMXS1p_k5c8aJXbiHudMMW6PKnjVdzCngFZgAd2Rq_4sAu1VmbnRezKiV37Nga7Ak-mBGFJZ3E1ilDBkcW5vzQoRGe_4wHrWcqqZfifEqe2H1OWGYTjhcfGmpkO-xAshBFTCMLVkFKSTKP4Yol4e6HmZMTM'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
