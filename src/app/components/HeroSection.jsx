"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';


export const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello, I'm </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Kelsey',
                                1000,
                                'Web Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>I am passionate about crafting visually stunning and user-friendly experiences on the web.
                    </p>
                    <div>
                        <a href="#contact"><button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-primary-400 to-secondary-600 hover:bg-slate-200 text-white'>Get in Touch</button></a>
                        <a href="#projects"><button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-primary-400 to-secondary-600 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>View my Work</span>
                        </button></a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <Image
                        src="/images/headshot-good.png"
                        alt="hero image"
                        className='rounded-full'
                        width={300}
                        height={300}
                    />
                </motion.div>
            </div>
        </section >
    )
}