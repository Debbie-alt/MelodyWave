import React from 'react';

const Navbar = () => {
  return (
    <nav className='p-10 sm:p-14 flex justify-between text-white geist-regular'>
      {/* Background gradients */}
      <div className="flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-black before:to-purple-200 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-purple-200 after:via-purple-400 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700/10 after:dark:from-purple-900 after:dark:via-[#7a0cc0]/40 before:lg:h-[360px]">
        <div className='absolute flex justify-between space-x-5 items-center'>
          {/* Logo and tagline */}
          <div>
            <h1 className='text-2xl sm:text-3xl font-bold text-white'>Melody <span>Wave</span></h1>
            <small className='text-white italic'>Feed your buds</small>
          </div>
          {/* Animated icon */}
          <img width="58" height="58" src="https://img.icons8.com/fluency/48/airpods-pro.png" alt="airpods-pro" className='animate-bounce w-[38px] h-[38px] sm:w-[58px] sm:h-[58px]'/>
        </div>

        {/* Navigation links */}
        <div className='navlinks space-x-8 absolute right-[10%] items-center hidden sm:flex'>
          <a href="https://debbiealt.tech/" target='_blank' className='px-3 py-2 border border-purple-500 rounded-full hover:bg-purple-500'>Stream Now</a>
          <a href="#features" className='hover:opacity-80 hover:text-purple-400'>Features</a>
          <a href="#about" className='hover:opacity-80 hover:text-purple-400'>About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
