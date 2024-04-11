"use client"
import React, { UseState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';


const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "My personal portfolio website created using Next.js and Tailwind CSS.",
        image: "/images/projects/project1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Workforce Management Application",
        description: "A PHP-powered web app with CRUD, dashboard, authentication, excel export, and more.",
        image: "/images/projects/project2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/kelseyrajher/workforce-management-app",
        previewUrl: "https://recruitapp.kelseyrajher.com",
    },
    {
        id: 3,
        title: "Travel Agency Website",
        description: "A travel agency website crafted with HTML and CSS.",
        image: "/images/projects/project3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/kelseyrajher/fjaka-travel-website",
        previewUrl: "https://fjakatravel.kelseyrajher.com",
    },
];

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };


    return (
        <section id="projects">
            <><h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
                <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>{projectsData.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgURL={project.image}
                            tags={project}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />

                    </motion.li>
                ))}
                </ul>
            </>
        </section>
    );
};

export default ProjectsSection;