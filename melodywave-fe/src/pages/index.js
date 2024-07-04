import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Header } from "@/components/Header";
import Features from "@/components/Features";
import About from "@/components/About";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` w-screen relative flex min-h-screen flex-col bg-gradient-to-tr from-purple-500 via-black to-[#040f0f] ${inter.className}`}>

       <Navbar/>
       <Header/>
       <Features/>
      <About/>

  </main>
  );
}
