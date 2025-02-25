"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image"

const images = [
    "https://pixabay.com/get/g5686325f0b4f08c92b1ae4f24d604c7da104ecd7a989061dec77e7b87a6a081d0334e18b6f447267261e6c02d7ba8155cc1212106ff2322d6349c3126984aa39_1280.jpg",
    "https://pixabay.com/get/g2a3e88c061045bd536c43ea57e4db4048da8e3b7074d40e62f8ec8879df4bf86c098b268d9c98c1d79f1983916232c1ff14c7464b13d14e15af9799485819ba3_1280.jpg",
    "https://pixabay.com/get/g0e7551ce4fd52c004236cc7f4beeaabf1c67a80e223fa448d36dc0f0e291bf6da452ae3ba51d581d368a9af07ed49f2b3ec228cdcf7989f2d04f8de3a624f311_1280.jpg",
];

const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 2 } },
};

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change background every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen z-[-2] overflow-hidden">

            {/* Background Image Animation */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={fadeVariants}
                        className="absolute w-full h-full object-cover"
                    />
                </AnimatePresence>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="z-[-3]">
                    <Image src="/logo/sta.png" alt="Logo" width={300} height={300}/>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-bold text-white"
                >
                    Explore Opportunities, Travel Smart
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg text-gray-200 mt-4 max-w-2xl"
                >
                    Discover job opportunities and expert travel guidance for America, Europe, and Canada. Secure your future with ease.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-6 flex space-x-4"
                >

                    <a href="/consultation" className="px-6 py-3 bg-transparent border border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition">
                        Book Consultation
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
