import React from 'react'
import {MorphingTextDemo} from "@/components/MorphinTextDemo";

import {RainbowButton} from "@/components/magicui/rainbow-button";


const Hero = () => {
    return (
        <section className="relative bg-hero-pattern w-full h-[60vh] overflow-hidden shadow-2xl rounded-xl">

            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-2 flex flex-col items-center mt-20 h-full text-white">
              <MorphingTextDemo/>

                <div className=" flex items-center mt-5 justify-center p-2 md:p-5">
                    <h1 className="text-center tracking-tighter md:text-4xl">
                        At <span className={"font-bold text-blue-600"}>Souhait Travel Advisors</span>, we specialize in helping individuals achieve their dreams of working and living abroad. Whether you are seeking job opportunities in America, Europe, or Canada, or need expert travel consultation, we provide direct guidance to make your journey seamless and cost-effective.
                    </h1>
                </div>
            </div>
            <div className="absolute bottom-10 flex items-center justify-center w-full">
                <RainbowButton>Register Now!!</RainbowButton>
            </div>
        </section>
    )
}
export default Hero
