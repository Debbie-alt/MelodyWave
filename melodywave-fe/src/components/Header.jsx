import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <header className="text-white relative h-[90vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold left-[10%] top-[20%] absolute bg-clip-text text-transparent bg-gradient-to-tr from-transparent via-purple-300 to-yellow-400">
        Unlimited Music,
      </h1>
      <motion.img
        src="/sun.png"
        alt="sun with headphones"
        className='absolute left-[20%]'
        width={160}
        initial={{ scale: 0, rotate: 180, }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
            type: "spring",
            duration:3,
            stiffness: 260,
            damping: 20
  }}
      />
       <motion.img
        src="/giphyeadphone.gif"
        alt="sun with headphones"
        className='absolute right-[20%] top-[8%]'
        width={70}
        initial={{ scale: 0 }}
        animate={{  scale: 1 }}
        transition={{
            type: "spring",
            delay:0.5,
            stiffness: 500,
            damping: 20
  }}
      />
      <img
        src="/futuristicmusic.png"
        width={500}
        height={700}
        alt="Logo"
        className=""
      />
      <h1 className="text-4xl font-bold right-[10%] bottom-[35%] absolute bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-purple-400 to-yellow-400">
        Unlimited Fun!
      </h1>
      <div className="absolute w-full h-24 mt-[60vh] glass-container"></div>
    </header>
  );
};
