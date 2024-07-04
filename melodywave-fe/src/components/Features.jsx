import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import Lottie from 'lottie-react';
import animationData from '../../public/Music.json'; 

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='w-screen  bg-gradient-to-br from-purple-400 via-white to-purple-400 ' id='features'>
      <h1 className='text-3xl font-semibold  p-14 text-white' data-aos='zoom-in'>Features</h1>
      <div data-aos='fade-up' className='flex flex-col sm:flex-row items-center bg mx-auto justify-evenly  w-screen  '>
        <Lottie animationData={animationData} loop={true} autoplay={true} style={{ height: 400,  }} className='w-screen sm:w-[50vw]' />
         <div className='flex flex-col w-[90vw] sm:w-[40vw] mb-6 p-5'>
            <figure className=''>
            <h1 className='text-lg font-semibold font-serif italic mb-4'>Stream Your Favourite Music </h1>
            <p className='text-wite mb-3 text-sm sm:text-md '>Discover the joy of unlimited music streaming with MelodyWave. Dive into a vast, curated library of songs spanning every genre and era, from chart-topping hits to hidden gems. 
                
              </p>
            <button className='px-5 py-2.5 bg-gradient-to-tr from-[#c42fa2] via-black to-[#c42fa2] rounded-full text-white 
            hover:opacity-80'>Start Streaming &rarr;</button>
            </figure>

         </div>
      </div>



      <div  className='flex flex-col sm:flex-row-reverse items-center bg mx-auto justify-evenly '>
        <Lottie animationData={animationData} loop={true} autoplay={true} style={{ height: 400,  }} className='w-screen sm:w-[50vw]' data-aos="flip-right" />
         <div className='flex flex-col w-[90vw] sm:w-[40vw] mb-6 p-5' data-aos="flip-left">
            <figure className=''>
            <h1 className='text-lg font-semibold font-serif italic mb-4'>Bookmark songs you love</h1>
            <p className='text-wite mb-3 text-sm sm:text-md '>Discover the joy of unlimited music streaming with MelodyWave. Dive into a vast, curated library of songs spanning every genre and era, from chart-topping hits to hidden gems. 
                
              </p>
            <button className='px-5 py-2.5 bg-gradient-to-tr from-[#c42fa2] via-transparent to-[#c42fa2] rounded-full text-neutral-600
            hover:opacity-80'>Start Streaming &rarr;</button>
            </figure>

         </div>
      </div>
      <div data-aos='fade-up' className='features flex flex-col sm:flex-row items-center bg mx-auto justify-evenly  w-screen bg-gradient-to-br from-purple-400 via-white to-purple-400 '>
        <Lottie animationData={animationData} loop={true} autoplay={true} style={{ height: 400,  }} className='w-screen sm:w-[50vw]' />
         <div className='flex flex-col w-[90vw] sm:w-[40vw] mb-6 p-5'>
            <figure className=''>
            <h1 className='text-lg font-semibold font-serif italic mb-4'>Stream Your Favourite Music </h1>
            <p className='text-wite mb-3 text-sm sm:text-md '>Discover the joy of unlimited music streaming with MelodyWave. Dive into a vast, curated library of songs spanning every genre and era, from chart-topping hits to hidden gems. 
                
              </p>
            <button className='px-5 py-2.5 bg-gradient-to-tr from-[#c42fa2] via-black to-[#c42fa2] rounded-full text-white 
            hover:opacity-80'>Start Streaming &rarr;</button>
            </figure>

         </div>
      </div>
    </section>
  );
}

export default Features;
