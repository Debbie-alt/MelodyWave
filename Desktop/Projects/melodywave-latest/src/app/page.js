import Navbar from "./landingpagecomp/Navbar";
import { Hero } from "./landingpagecomp/Hero";

export default function Home() {
  return (
    <div className="[family-name:var(--font-geist-sans)]  w-screen relative flex min-h-screen flex-col bg-gradient-to-tr from-purple-500 via-black to-[#040f0f] overflow-x-hidden">
      <Navbar/>
      <Hero/>  
    </div>
  );
}
