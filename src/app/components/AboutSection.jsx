"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='flex flex-wrap items-center '>
                <li className='me-4'>React</li>
                <li className='me-4'>Next.js</li>
                <li className='me-4'>Tailwind CSS</li>
                <li className='me-4'>PHP</li>
                <li className='me-4'>SQL</li>
                <li className='me-4'>JavaScript</li>
                <li className='me-4'>Bootstrap</li>
                <li className='me-4'>HTML</li>
                <li className='me-4'>CSS</li>
                <li className='me-4'>Python</li>
                <li className='me-4'>C#</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Algonquin College - Ottawa, Canada</li>
                <li>Web Development & Internet Applications - Honours</li>
                <li>GPA 3.84</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about" className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-image.jpg" width={600} height={600} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-md'>I'm Kelsey Rajher, a recent graduate eager to kickstart my career as a junior web developer.<br /><br />

                        From creating captivating user interfaces to implementing robust back-end functionality, I'm passionate about leveraging technology to solve problems and deliver impactful solutions.<br /><br />

                        I'm excited to embark on this new phase as a junior web developer and actively seeking opportunities to apply my knowledge, contribute to meaningful projects, and further develop my skills.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")}
                            active={tab == "skills"}>
                            {" "}Skills {" "}

                        </TabButton>

                        <TabButton selectTab={() => handleTabChange("education")}
                            active={tab == "education"}>
                            {" "} Education {" "}

                        </TabButton>
                    </div>
                    <div className='mt-8'> {TAB_DATA.find((t) => t.id === tab).content} </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;