import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Loader from "@/components/loader/loader";
import Project from "@/components/project"; 
import Education from "@/components/education"; 
import Hero from "@/components/Hero";
import Experience from "@/components/experience"; 
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Education />
      <Experience /> 
      <Project />    
      <Contact />
    </>
  );
}
