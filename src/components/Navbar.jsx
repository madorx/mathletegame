import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Privacy from './Privacy';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-xs">
      <div>
        {' '}
        <button
          className="text-transparent bg-clip-text bg-gradient-to-b from-pink-600 to-purple-400 text-lg"
          onClick={refreshPage}
        >
          M
        </button>
      </div>
      <div className="hidden md:flex">
        <ul className="hidden md:flex title text-transparent bg-clip-text bg-gradient-to-b from-pink-600  to-purple-400">
          <li className="px-4 cursor-pointer hover:scale-105 duration-300">
            <Link to="game" smooth={true} duration={500}>
              <span className="hover:text-cyan-300">Game</span>
            </Link>
          </li>
          <li className="px-4 cursor-pointer hover:scale-105 duration-300">
            <Link to="rules" smooth={true} duration={500}>
              <span className="hover:text-cyan-300">How to Play</span>
            </Link>
          </li>
          <li
            onClick={() => setOpenPrivacy(true)}
            className="px-4 cursor-pointer animated animatedFadeInDown fadeInDown hover:scale-105 duration-300"
          >
            <span className="hover:text-cyan-300">Privacy Policy</span>
          </li>
        </ul>
      </div>
      <div onClick={handleNav} className="md:hidden z-10 bg-pink-600">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <Privacy open={openPrivacy} onClose={() => setOpenPrivacy(false)} />

      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[65%] ease-in-out duration-500 bg-[#0a192f] cursor-pointer border-r border-purple-400 title'
            : 'ease-in-out duration-500 fixed left-[-110%]'
        }
      >
        <li
          className="py-6 p-4 text-4xl cursor-pointer border-b border-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400
    "
        >
          <Link onClick={handleNav} to="game" smooth={true} duration={500}>
            <span className="hover:text-teal-300">Game</span>
          </Link>
        </li>
        <li className="py-6 p-4 text-4xl cursor-pointer border-b border-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400">
          <Link onClick={handleNav} to="rules" smooth={true} duration={500}>
            <span className="hover:text-teal-300">How To Play</span>
          </Link>
        </li>
        <li
          onClick={() => setOpenPrivacy(true)}
          className="py-6 p-4 text-4xl cursor-pointer border-b border-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400"
        >
          <span className="hover:text-cyan-300">Privacy Policy</span>
        </li>
      </ul>
    </div>
  );
};
