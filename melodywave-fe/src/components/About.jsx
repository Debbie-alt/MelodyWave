import React from 'react'

const About = () => {
  return (
     <section className='flex flex-col space-y-5 bg-inherit p-20 bg-gradient-to-tr from-purple-300 via-black to-[#040f0f]' id='about'>
        <h1 className='text-white text-3xl font-semibold'>About MelodyWave</h1>

        <div className='flex space-x-24 w-screen '>
         <div className='text-gray-300 w-[40vw] leading-7 mt-8'>
               <p>   
               Our music streaming app was inspired by a love of music and a desire to create a more personalized listening experience. Unlike other platforms, we offer a vast music library, intelligent playlist curation, and community sharing features. We're committed to bringing the joy of music to every listener, anytime and anywhere. Join us and discover a new way to experience music.
                
               </p> 
               <div className='flex space-x-5 mt-5 items-center hover:text-white cursor-pointer'>
                <a href='https://github.com/Debbie-alt/MelodyWave' target='_blank' >See us on github &rarr;</a>
               <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github"/>

               </div>
               <hr className='mt-5' />
        </div>

        <div className='mt-20'>
        <h3 className='text-yellow-200 font-semibold text-xl'>Developers and Contributors</h3>
        <figure className='glassycard w-[40vw] p-12  mt-7'>
            <p className='text-xl font-serif text-left'>Faisal Ali-Adebambo </p>
            <button className='px-6 py-2 mt-5 bg-gradient-to-tr from-yellow-200 via-purple-500 to-yellow-200 rounded-full'>Roles</button>
            <small className=' mt-4 mx-5'>Backend Developer</small>

            <div className='flex space-x-5 mt-6 '>
                <a href="https://x.com/Faisal__Ali20">
                  <img width="53" height="53" src="https://img.icons8.com/3d-fluency/94/twitter-circled.png" alt="twitter-circled"/>
                </a>
                <a href="https://github.com/oluwa20">
                <img width="45" height="45" src="/purplegit.png"/>

                </a>
                <a href="">
                <img width="60" height="60" src="/pin.png" alt="linkedin"/>
                </a>

            </div>

        </figure>
        <figure className='glassycard w-[30vw] p-12  mt-7'>
            <p className='text-xl font-serif text-left'>Fayemi Funmilayo</p>
            <button className='px-6 py-2 mt-5 bg-gradient-to-tr from-yellow-200 via-purple-500 to-yellow-200 rounded-full'>Roles</button>
            <small className=' mt-4 mx-5'>Frontend Developer and Database Administrator</small>

            <div className='flex space-x-5 mt-6 '>
                <a href="https://x.com/Funmi565">
                  <img width="53" height="53" src="https://img.icons8.com/3d-fluency/94/twitter-circled.png" alt="twitter-circled"/>
                </a>
                <a href="https://github.com/Debbie-alt">
                <img width="45" height="45" src="/purplegit.png"/>

                </a>
                <a href="https://www.linkedin.com/in/funmilayo-fayemi-7112ab272/">
                <img width="60" height="60" src="/pin.png" alt="linkedin"/>
                </a>

            </div>


        </figure>
        </div>

        </div>
       
 

     </section> 

)
}

export default About