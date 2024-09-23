'use client';

import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Dynamically import components with SSR disabled
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Features = dynamic(() => import('../components/Features'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main
      className={`w-screen relative flex min-h-screen flex-col bg-gradient-to-tr from-purple-500 via-black to-[#040f0f] ${inter.className} overflow-x-hidden`}
    >
      <Navbar />
      <Header />
      <Features />
      <About />
      <Footer />
    </main>
  );
}
