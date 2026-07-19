import { useState } from "react";
import logo from "../assets/logo.jpg";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [sideBar, setSidebar] = useState(false);
  return (
    <div className='flex px-4 sm:px-12 lg:px-24 xl:px-40 py-4 justify-between items-center sticky top-0 z-50 bg-white'>
      <div>
        <img src={logo} className='w-12 rounded-full' />
      </div>

      <div
        className={`flex gap-2.5 transition-all duration-300 ease-in-out
    max-sm:flex-col max-sm:bg-primary max-sm:min-h-screen
    max-sm:fixed max-sm:right-0 max-sm:bottom-0 max-sm:top-0
    max-sm:text-white max-sm:pt-5  max-sm:overflow-hidden
    ${sideBar ? "max-sm:w-60 max-sm:pl-5" : "max-sm:w-0 max-sm:pl-0"}`}>
        {sideBar && (
          <IoClose
            className='sm:hidden w-12 text-3xl font-bold text-white fixed right-2 '
            onClick={() => setSidebar(false)}
          />
        )}

        <Link
          to='/'
          onClick={() => {
            (setSidebar(false),
              window.scrollTo({ top: 0, behavior: "smooth" }));
          }}
          className='hover:bg-primary max-sm:mt-8 p-2.5 hover:text-white rounded-full text-base font-medium cursor-pointer text-gray-700 max-sm:text-white'
          href='#'>
          Home
        </Link>
        <Link
          to='/#About-us'
          onClick={() => setSidebar(false)}
          className='hover:bg-primary p-2.5 hover:text-white rounded-full text-base font-medium cursor-pointer text-gray-700 max-sm:text-white'
          href='#About-us'>
          About us
        </Link>
        <Link
          to='/#Structure'
          onClick={() => setSidebar(false)}
          className='hover:bg-primary p-2.5 hover:text-white rounded-full text-base font-medium cursor-pointer text-gray-700 max-sm:text-white'
          href='#Structure'>
          Structure
        </Link>
        <Link
          to='/history'
          onClick={() => {
            (setSidebar(false),
              window.scrollTo({ top: 0, behavior: "smooth" }));
          }}
          className='hover:bg-primary p-2.5 hover:text-white rounded-full text-base font-medium cursor-pointer text-gray-700 max-sm:text-white'
          href='#History'>
          History
        </Link>
        <Link
          to='/#Contact-us'
          onClick={() => setSidebar(false)}
          className='hover:bg-primary p-2.5 hover:text-white rounded-full text-base font-medium cursor-pointer text-gray-700 max-sm:text-white'
          href='#Contact-us'>
          Contact us
        </Link>
      </div>
      {!sideBar && (
        <CiMenuFries
          className='sm:hidden w-12 text-3xl font-bold '
          onClick={() => setSidebar(true)}
        />
      )}
    </div>
  );
};

export default NavBar;
