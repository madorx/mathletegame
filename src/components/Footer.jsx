import React, { useState } from 'react';
import TermsAndConditions from './Terms';

export const Footer = () => {
  const [openTermsAndConditions, setOpenTermsAndConditions] = useState(false);
  return (
    <div className="w-full h-[80px] bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center text-center p-4 mt-4 text-transparent bg-clip-text bg-gradient-to-b from-pink-600 via-pink-600 to-purple-400">
        <ul className="md:flex title text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400 p-4">
          <li
            onClick={() => setOpenTermsAndConditions(true)}
            className="px-4 cursor-pointer animated animatedFadeInDown fadeInDown hover:scale-105 duration-300"
          >
            <span className="hover:text-cyan-300">Terms and Conditions</span>
          </li>
        </ul>
        <TermsAndConditions
          open={openTermsAndConditions}
          onClose={() => setOpenTermsAndConditions(false)}
        />
        {!openTermsAndConditions && <div>&copy; 2022-2023 ArcadiusGames</div>}
      </div>
    </div>
  );
};
