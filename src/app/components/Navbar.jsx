"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, XmarkIcon } from "@heroicons/react/24/solid";


const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    &lt;KR&gt;
                </Link>

                <div className="mobile-menu block md:hidden">
                    <button onClick={toggleNavbar} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                    </button>
                </div>

                <div className={`menu ${navbarOpen ? 'block' : 'hidden'} flex flex-col text-center items-center md:hidden w-full`} id="navbar">
                    <ul className="flex flex-col p-4 space-y-4 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} onClick={toggleNavbar} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:flex md:items-center md:space-x-8">
                    {navLinks.map((link, index) => (
                        <NavLink key={index} href={link.path} title={link.title} />
                    ))}
                </div>
            </div>

        </nav>
    )
}

export default Navbar;