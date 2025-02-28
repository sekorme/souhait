



import Hero from "@/components/HeroFour";
import Testimonials from "@/components/Testimonials";
import {AnimatedTestimonialsDemo} from "@/components/AnimatedTes";

import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import FAQ from "@/components/Faq";

import {LayoutGridDemo} from "@/components/LayoutGridDemo";
import {getCurrentUser} from "@/lib/actions/users.actions";
import {redirect} from "next/navigation";



export default async function Home() {
    const currentUser = await getCurrentUser();
    if (currentUser) return redirect("/dashboard");
  return (
   <main className={"   "}>
     <Hero/>
       <WhyChooseUs/>
       <LayoutGridDemo/>
     <Testimonials/>
       <HowItWorks/>
       <AnimatedTestimonialsDemo/>
       <FAQ/>

      <Footer/>
   </main>
  );
}
