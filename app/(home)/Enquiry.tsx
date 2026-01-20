'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Manwithphone from '@/public/Manwithphone.png'
import { motion } from 'framer-motion';


type EnquiryFormData = {
    name: string;
    email: string;
    phone: string;
    location: string;
    course: string;
};

const Enquiry = () => {
    const [formData, setFormData] = useState<EnquiryFormData>({
        name: "",
        email: "",
        phone: "",
        location: "",
        course: "Fashion Design",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Enquiry Submitted:", formData);

        setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            course: "Fashion Design",
        });
    }
    return (
        <section className="mx-20 py-2 font-montserrat">
            <div className="text-center mb-5 lg:mb-20">
                <motion.p
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-[#E13C5B] font-montserrat text-[24px] mb-4">
                    Student Success Stories
                </motion.p>

                <motion.p
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-xl lg:text-4xl font-montserrat font-bold max-w-5xl mx-auto leading-12">
                    Where our graduates are making their mark <br />
                    in the creative industry
                </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-30 items-center">

                {/* LEFT SIDE – BACKGROUND IMAGE + MAN IMAGE */}
                <motion.div
                    initial={{ x: -120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="relative h-130">

                    {/* BACKGROUND IMAGE */}
                    <div></div>

                    {/* MAN IMAGE */}
                    <div className="relative z-10 flex items-end justify-center h-full">
                        <div className="w-120 h-120  flex items-center justify-center">
                            <Image
                                src={Manwithphone}
                                alt="Man"
                                className="w-full"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE – FORM */}
                <motion.div
                    initial={{ x: 120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="relative">

                    {/* VERTICAL ENQUIRY TEXT */}
                    <p className="absolute -left-70 lg:lg:-left-85 xl:-left-95 tracking-[40px] top-45 lg:top-65 -translate-y-1/2 -rotate-90 text-[#D9D9D9] text-3xl lg:text-[60px]  font-semibold select-none">
                        Enquiry
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 pb-10 lg:pb-20">

                        {/* NAME */}
                        <div>
                            <label className="block text-sm lg:text-[20px] font-bold mb-1">
                                Name*
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Your Name"
                                className="w-full text-[#CACACA] border rounded-md px-4 py-1 lg:py-3 outline-none"
                                required
                            />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block text-sm lg:text-[20px] font-bold mb-1">
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                                className="w-full text-[#CACACA] border rounded-md px-4 py-1 lg:py-3 outline-none"
                                required
                            />
                        </div>

                        {/* PHONE */}
                        <div>
                            <label className="block text-sm lg:text-[20px] font-bold mb-1">
                                Phone No*
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter Your Phone Number"
                                className="w-full  border text-[#CACACA] rounded-md px-4 py-1 lg:py-3 outline-none"
                                required
                            />
                        </div>

                        {/* LOCATION */}
                        <div>
                            <label className="block text-sm lg:text-[20px] font-bold mb-1">
                                Location*
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Location"
                                className="w-full border text-[#CACACA] rounded-md px-4 py-1 lg:py-3 outline-none"
                                required
                            />
                        </div>

                        {/* COURSE */}
                        <div className="relative group">
                            <label className="block text-sm lg:text-[20px] font-bold mb-1">
                                Course Interested*
                            </label>

                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className="w-full appearance-none border border-[#CACACA] rounded-md px-4 py-1 lg:py-3 pr-12 text-[#FF5555] focus:outline-none"
                            >
                                <option>Fashion Design</option>
                                <option>Interior Design</option>
                                <option>Graphic Design</option>
                                <option>Video Editing</option>
                            </select>

                            {/* Arrow */}
                            <div className="pointer-events-none absolute right-3 top-10 lg:top-15 -translate-y-1/2 transition-transform duration-200 group-focus-within:rotate-180">
                                <svg
                                    className="h-6 w-6 text-[#FF5555]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="mt-6 bg-[#000080] absolute bottom-0 right-0 lg:right-20 cursor-pointer hover:bg-blue-500 text-white px-8 py-2 lg:px-12 lg:py-3 rounded-md "
                        >
                            Submit
                        </button>

                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Enquiry