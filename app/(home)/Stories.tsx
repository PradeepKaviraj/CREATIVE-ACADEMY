'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import rightquot from '@/public/quoteright.svg'
import { motion } from 'framer-motion';

const Stories = () => {
    const cardsData = [
        {
            id: 1,
            name: "VARSHA KARIYA",
            description: 'Fashion Design Graduate Dazzles Studio',
            testimonial: "THE CREATIVE ACADEMY transformed my passion for fashion into a thriving career. The small batch size meant I got personal attention, and the industry connections helped me land my dream job at a top fashion house.",
        },
        {
            id: 2,
            name: "HEENA",
            description: 'Interior Design Graduate White Horse Interiors, Founder',
            testimonial: "The interior design course was perfectly balanced between creativity and technical skills. I'm now running my own design studio and have completed over 20 residential projects in just 3 years.",
        },

    ];
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < cardsData.length - 2) {
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };
    return (
        <section className="mx-20  font-montserrat">

            {/* SECTION HEADER */}
            <motion.div
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-center mb-20">
                <p className="text-[#E13C5B] text-[24px] font-montserrat mb-4">
                    Student Success Stories
                </p>

                <motion.h2
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-xl lg:text-3xl xl:text-4xl font-bold text-[#000000] max-w-auto mx-auto leading-12">
                    Where our graduates are making their mark <br />
                    in the creative industry
                </motion.h2>
            </motion.div>

            {/* TESTIMONIAL CARDS */}
            <motion.div
                initial={{ x: 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className="grid grid-cols-2 gap-10 items-stretch">

                {/* CARD 1 */}
                <div className={`relative ${index % 2 === 0 ? "bg-[#F5CC00]" : 'bg-[#000080] text-white'} rounded-3xl py-14 px-10`}>

                    {/* QUOTE ICON */}
                    <div className="absolute top-2 right-8 ">
                        <Image src={rightquot} alt='Quot' className='w-25 h-25' />
                    </div>

                    <h3 className="text-2xl font-montserrat font-bold mb-1">
                        {cardsData[index]?.name}
                    </h3>

                    <p className="text-xl font-medium font-montserrat mb-8 xl:pr-30">
                        {cardsData[index]?.description}
                    </p>

                    <p className=" text-[#323232] sm:text-lg font-montserrat font-medium text-base leading-relaxed ">
                        &#34;{cardsData[index]?.testimonial}&#34;
                    </p>
                </div>

                {/* CARD 2 */}
                <div className={`relative ${index + 1 % 2 === 0 ? "bg-[#F5CC00]" : 'bg-[#000080] text-white'}  rounded-3xl py-14 px-10`}>

                    {/* QUOTE ICON */}
                    <div className="absolute top-2 right-8  opacity-40">
                        <Image src={rightquot} alt='Quot' className='w-25 h-25' />
                    </div>

                    <h3 className="text-2xl font-montserrat font-bold mb-1">
                        {cardsData[index + 1]?.name}
                    </h3>

                    <p className="text-xl font-medium font-montserrat mb-8 xl:pr-30">
                        {cardsData[index + 1]?.description}
                    </p>

                    <p className="text-lg font-montserrat font-medium leading-relaxed ">
                        &#34;{cardsData[index + 1]?.testimonial}&#34;
                    </p>
                </div>
            </motion.div>

            {/* NAVIGATION (UI ONLY) */}
            <motion.div
                initial={{ x: 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex justify-end gap-4 mt-10">
                <button onClick={prev} disabled={index === 0} className={ index === 0 ? 'w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-500 text-xl cursor-pointer' : 'w-12 h-12 border-2 border-[#000080] rounded-full flex items-center justify-center text-[#000080] text-xl hover:scale-105 cursor-pointer'}>
                    ←
                </button>

                <button onClick={next}
                    disabled={index >= cardsData.length - 2} className={ index >= cardsData.length - 2 ?'w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 text-xl cursor-pointer':'w-12 h-12 border-2 border-[#000080] rounded-full flex items-center justify-center text-[#000080] text-xl hover:scale-105 cursor-pointer'}>
                    →
                </button>
            </motion.div>


        </section>
    )
}

export default Stories