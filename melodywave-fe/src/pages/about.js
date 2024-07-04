import Navbar from "@/components/Navbar";
import { Header } from "@/components/Header";



export default  function About() {
  return (
    <section
      className={`relative flex min-h-screen flex-col bg-gradient-to-tr from-purple-400 via-black to-[#040f0f]`}>

       <Navbar/>
       <Header/>
       <About/>
       
       
      </section  >
  );
}
