"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

// Sample Team Members
const team = [
    { name: "Alex Asiedu Sekorme", role: "CEO & Founder", image: "https://cloud.appwrite.io/v1/storage/buckets/678bc03400383f991b20/files/67bdee03002fdd6ee1dc/view?project=678a55860032471b2331" },
    { name: "Jane Smith", role: "Visa Consultant", image: "/images/team2.jpg" },
    { name: "Michael Brown", role: "Travel Advisor", image: "/images/team3.jpg" },
];

// Core Values
const values = [
    { title: "Transparency", desc: "No hidden fees, 100% honesty.", color: "blue" },
    { title: "Affordability", desc: "Cutting down unnecessary costs.", color: "green" },
    { title: "Success", desc: "Helping you apply with confidence.", color: "purple" },
    { title: "Support", desc: "Personalized one-on-one guidance.", color: "orange" },
];

const About = () => {
    return (
        <section className="dark:bg-neutral-900">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center text-white text-center bg-cover bg-center"
                 style={{ backgroundImage: "url('https://pixabay.com/get/g66395eb18d31ef0967f90aad4a538efc5a8a2426b8805eaa20a87ce11515eeed37f762f244488170f2cefa23ec7f5cb6639fcddf6d5b0b8e8b734609e404f70d_1280.jpg')" }}>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="bg-black/50 w-full h-full flex items-center justify-center p-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
                {/* Who We Are Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <Image src="https://pixabay.com/get/gef0540fff8aea82d0f1595c0ccaf5f48b6fe407d02159aff90cc81efab648e72845b6fc96391fb1be3f4d77d560ad0aa94b7c35d6ba846500527b5a27336d3c1_1280.jpg" width={600} height={400} alt="About Us" className="rounded-lg shadow-lg" />
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-400">Who We Are</h2>
                        <p className="mt-4 text-gray-600">
                            Souhait Travel Advisors is an **online consultation platform** that helps individuals navigate their journey to the **USA, Canada, and Europe** affordably. We eliminate unnecessary intermediaries, providing **direct, reliable, and cost-effective** guidance for visa applications, job opportunities, and travel arrangements.
                        </p>
                    </div>
                </motion.div>

                {/* Mission & Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-semibold text-gray-400">Our Mission & Vision</h2>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Our mission is to **simplify the travel and immigration process**, ensuring our clients can secure visas and job placements with **minimal cost and maximum success**. We believe in a world where people can chase their dreams without unnecessary financial burdens.
                    </p>
                </motion.div>

                {/* Our Core Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-semibold text-center text-gray-400">Our Core Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`dark:bg-neutral-800 p-6 rounded-lg shadow-md text-center border-t-4 border-${value.color}-500`}
                            >
                                <h3 className="text-xl font-semibold ">{value.title}</h3>
                                <p className=" mt-2">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Meet Our Team */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-semibold text-center ">Meet Our Team</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className=" p-6 rounded-lg shadow-md text-center"
                            >
                                <Image src={member.image} width={200} height={200} alt={member.name} className="rounded-full mx-auto" />
                                <h3 className="text-xl font-semibold t mt-4">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-blue-600 text-white p-12 rounded-lg text-center"
                >
                    <h2 className="text-3xl font-semibold">Why Choose Souhait Travel Advisors?</h2>
                    <p className="mt-4 text-lg">
                        We provide **reliable** and **affordable** visa consultation and job opportunities without **middlemen fees**. Our experts ensure your applications have **high success rates** while saving you **time and money**.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-200 transition">
                        Get Started
                    </button>
                </motion.div>

            </div>
            <Footer/>
        </section>
    );
};

export default About;
