
import {OrbitingCirclesDemo} from "@/components/OrbitCircle";


import Hero from "@/components/HeroFour";
import Testimonials from "@/components/Testimonials";
import {AnimatedTestimonialsDemo} from "@/components/AnimatedTes";

import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";



export default function Home() {
  return (
   <main className={"   "}>
     <Hero/>
       <WhyChooseUs/>
     <Testimonials/>
       <HowItWorks/>
       <AnimatedTestimonialsDemo/>
       <OrbitingCirclesDemo/>
      <Footer/>
   </main>
  );
}
