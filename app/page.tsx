
import {OrbitingCirclesDemo} from "@/components/OrbitCircle";


import Hero from "@/components/HeroFour";
import Testimonials from "@/components/Testimonials";
import {AnimatedTestimonialsDemo} from "@/components/AnimatedTes";

import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import FAQ from "@/components/Faq";



export default function Home() {
  return (
   <main className={"   "}>
     <Hero/>
       <WhyChooseUs/>
     <Testimonials/>
       <HowItWorks/>
       <AnimatedTestimonialsDemo/>
       <FAQ/>
       <OrbitingCirclesDemo/>
      <Footer/>
   </main>
  );
}
