"use client"
import React, { useState } from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import Link from "next/link";
import Image from 'next/image';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData);

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };

    return (
        <section id="contact" className='grid md:grid-cols-2 md:my-12 py-24 gap-4 relative'>

            <div>
                <h2 className='text-4xl font-bold text-white mb-6 my-2'>Contact Me</h2>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    If you are looking for a dedicated and enthusiastic full-stack developer,
                    I would love to connect and explore how I can contribute to your team&apos;s success.
                </p>
                <div className='socials flex flex-row gap-2 mb-6'>
                    <Link href="https://github.com/kelseyrajher">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
                ) : (
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <div className='mb-6'>
                            <label htmlFor="name" type="text" className='text-white block mb-2 text-sm font-medium'>Name</label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                required
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder=""
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="email" type="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder=""
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="subject" type="text" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder=""
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="message" type="email" className='text-white block mb-2 text-sm font-medium'>Message</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder=""
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EmailSection;
