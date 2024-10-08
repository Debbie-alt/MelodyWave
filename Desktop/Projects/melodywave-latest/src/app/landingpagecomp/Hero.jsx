import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <header className="text-white relative h-[90vh] flex flex-col items-center justify-center bg-gradient-to-tr from-purple-400 via-black to-[#040f0f]">
      {/* Main heading */}
      <h1 className="text-2xl sm:text-4xl font-bold left-[10%] top-[10%] sm:top-[20%] absolute bg-clip-text text-transparent bg-gradient-to-tr from-transparent via-purple-300 to-yellow-400">
        Unlimited Music,
      </h1>

      {/* Rotating sun image */}
       <motion.img
        src="/sun.png"
        alt="sun with headphones"
        className='absolute left-[20%] hidden sm:block'
        width={160}
        initial={{ scale: 0, rotate: 180 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ type: "spring", duration: 3, stiffness: 260, damping: 20 }}
      /> 

      {/* Headphones gif */}
       <motion.img
        src="/giphyeadphone.gif"
        alt="sun with earphones"
        className='absolute right-[15%] sm:right-[20%] top-[5%] sm:top-[8%]'
        width={70}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.5, stiffness: 500, damping: 20 }}
      /> 

      {/* Central image */}
       <img
        src="/futuristicmusic.png"
        width={500}
        height={700}
        alt="Logo"
        className=""
      /> 

      {/* Secondary heading */}
      <h1 className="text-2xl sm:text-4xl font-bold right-[10%] bottom-[35%] absolute bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-purple-400 to-yellow-400">
        Unlimited Fun!
      </h1>

      {/* Call to action section */}
      <div className="text-sm absolute w-full h-24 mt-[60vh] glass-container text-left px-7 sm:px-20 py-10 text-white inline-flex items-center">
        VISIT THE LIVE APP AND STREAM NOW! 
        &nbsp;<button className='px-3 py-2 rounded-full border'>&rarr;</button>
      </div>
    </header>
  );
};
