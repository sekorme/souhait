"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, MessageSquare, User } from "lucide-react";
import Link from "next/link";
import {ModeToggle} from "@/components/ModeToggle";

const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "My Jobs", href: "/jobs", icon: Briefcase },
    { name: "Messages", href: "/messages", icon: MessageSquare },
    { name: "Profile", href: "/profile", icon: User },

];

const BottomNavbar = () => {
    const [active, setActive] = useState("/");

    useEffect(() => {
        // Get last active tab from localStorage
        const savedTab = localStorage.getItem("activeTab");
        if (savedTab) {
            setActive(savedTab);
        }
    }, []);

    const handleTabClick = (href: string) => {
        setActive(href);
        localStorage.setItem("activeTab", href); // Save active tab to localStorage
    };

    return (
        <nav className="fixed bottom-0 bg-white left-0 w-full dark:bg-neutral-800 border-t-4 rounded-t-2xl border-[#ff3d57] shadow-lg  flex justify-around py-3 z-50">
            {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => handleTabClick(item.href)}
                        className="relative flex flex-col items-center text-gray-500 hover:text-[#ff3d57] transition"
                    >
                        <motion.div
                            animate={{ y: isActive ? -5 : 0, scale: isActive ? 1.2 : 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <item.icon className={`w-6 h-6 ${isActive ? "text-[#ff3d57]" : "text-gray-500"}`} />
                        </motion.div>
                        <span className={`text-xs mt-1 ${isActive ? "text-[#ff3d57]" : "text-gray-500"}`}>
              {item.name}
            </span>
                        {isActive && (
                            <motion.div
                                layoutId="activeIndicator"
                                className="absolute bottom-[-2px] w-4 h-1 bg-[#ff3d57] rounded-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            />
                        )}
                    </Link>
                );
            })}
            <div>
            <ModeToggle/>
                <p className={"text-xs text-gray-500"}>Theme</p>
            </div>
        </nav>
    );
};

export default BottomNavbar;
