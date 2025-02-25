'use client'
import React from 'react'

const Navbar = () => {
    return (
        <nav className={"flex w-full p-5 m-3 bg-black opacity-1 items-center z-50 justify-between"}>
            <div className={"text-white"}>
                Welcome
            </div>
            <div>
                <ul className={"flex text-white gap-2 m-3"}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
