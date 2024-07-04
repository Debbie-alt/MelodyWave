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
    <section className='w-screen   ' id='features'>
      <h1 className='text-3xl font-semibold bg- p-10 text-whie  bg-gradient-to-br from-purple-300 via-white to-purple-300 ' data-aos='zoom-in'>Features</h1>
      <div data-aos='fade-up' className='flex items-center bg mx-auto justify-evenly  w-screen bg-gradient-to-br from-purple-300 via-white to-purple-300 '>
        <Lottie animationData={animationData} loop={true} autoplay={true} style={{ height: 400,  }} className='w-[50vw]' />
         <div className='flex flex-col text-wite w-[40vw]'>
            <figure className=''>
            <h1 className='text-lg font-semibold font-serif italic mb-4'>Stream Your Favourite Music </h1>
            <p className='text-wite mb-3'>Discover the joy of unlimited music streaming with MelodyWave. Dive into a vast, curated library of songs spanning every genre and era, from chart-topping hits to hidden gems. 
                
              </p>
            <button className='px-5 py-2.5 bg-gradient-to-tr from-[#c42fa2] via-black to-[#c42fa2] rounded-full text-white'>Start Streaming &rarr;</button>
            </figure>

         </div>
      </div>
    </section>
  );
}

export default Features;
