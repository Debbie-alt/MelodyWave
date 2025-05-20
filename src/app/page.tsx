'use client'

import Navbar from '../components/Navbar'
import  Header from '../components/Header'
import Features from '../components/Features'
import About from '../components/About'
import Footer from '../components/Footer'
export default function Home() {

  return (
             <div
                className={`w-screen relative flex min-h-screen flex-col bg-gradient-to-tr from-purple-500 via-black to-[#040f0f]  overflow-x-hidden`}>
                <Navbar />
                <Header />
                 <Features />
                <About />
                <Footer />  
              </div>
  );
}
