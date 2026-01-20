'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Shilpa from '@/public/Shilpa-Prakash.png'
import { useState } from 'react';
import Faculty from '@/components/Faculty';



const Team = () => {

    const cardsData = [
        {
            id: 1,
            name: 'Shilpa Prakash',
            image: Shilpa,
            role: 'Founder',
            bio: "Shilpa is an engineer who has done her Masters in Information Management from Stevens Institute, NJ. She then persued Masters in fashion to make her dream reality, She now owns the label Shilpa Hari designs and is a successful celebrity stylist.",
            thought: "She believes and works towards the mission 'the essence of being human is being creative' - Joel Garreau",
            motive: "Shilpa & her team believe in prepping the students to be innovative, original & futuristic with our 100% job guaranteed courses.",
        },
        {
            id: 2,
            name: 'chokkesh',
            image: Shilpa,
            role: 'Founder',
            bio: "Shilpa is an engineer who has done her Masters in Information Management from Stevens Institute, NJ. She then persued Masters in fashion to make her dream reality, She now owns the label Shilpa Hari designs and is a successful celebrity stylist.",
            thought: "She believes and works towards the mission 'the essence of being human is being creative' - Joel Garreau",
            motive: "Shilpa & her team believe in prepping the students to be innovative, original & futuristic with our 100% job guaranteed courses.",
        }
    ]

    const facultyDetails = [
        {
            id: 1,
            name: 'Roshini S',
            image: '/Roshini.png',
            designation: 'Fashion Design Faculty',
            bio: 'Fashion is not just about style, it’s about structure, precision, and creativity. With a passion for design and teaching, Roshini focuses on empowering learners to master the art of pattern making—the very foundation of fashion. By blending technical skills with creative vision, she aims to inspire the next generation of designers to innovate with confidence and craft garments that truly tell a story.'
        },

        {
            id: 2,
            name: "Neethu Narayan",
            image: '/Neethu.png',
            designation: 'Fashion Design Faculty',
        },

        {
            id: 3,
            name: "Rashmi B V",
            image: null,
            designation: 'Graphic & Web Design, 3D Software Faculty',
        },
        {
            id: 4,
            name: "Suman S Sharma",
            image: null,
            designation: 'Interior Design Faculty, Skilled AutoCad Draftsman, and Design Expert',
        }
    ]
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < cardsData.length - 1) {
            setIndex(index + 1);
        }
    };
    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };


    return (
        <>
            <section>
                <motion.h1
                    key={cardsData[index].id}
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='text-[#001715] font-sans font-bold text-3xl lg:text-4xl xl:text-5xl text-center py-2 xl:py-10'>
                    Meet The Team
                </motion.h1>

                <div key={cardsData[index].name} className='flex pt-10 px-10 xl:px-20 relative pb-15 xl:pb-5'>

                    <motion.div
                        key={index}
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='w-1/2 flex justify-center'>
                        <Image src={cardsData[index]?.image} alt={cardsData[index].name} priority={true} className='w-70 h-90 lg:w-100 lg:h-110  xl:w-120 xl:h-120' />
                    </motion.div>

                    <div className='w-1/2 flex flex-col justify-center gap-2'>
                        <motion.h1
                            initial={{ x: 120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='text-[#000080] text-xl lg:text-2xl xl:text-3xl font-bold font-montserrat'>{cardsData[index].name}</motion.h1>
                        <motion.p
                            initial={{ x: 120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='text-sm lg:text-lg xl:text-xl text-[#585858] font-bold font-montserrat'>{cardsData[index].role}</motion.p>
                        <motion.p
                            initial={{ x: 120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='text-[#585858] font-montserrat text-sm lg:text-lg xl:text-xl leading-relaxed font-semibold opacity-85'>{cardsData[index].bio}</motion.p>
                        <motion.p
                            initial={{ x: 120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='text-[#585858] font-montserrat text-sm lg:text-lg xl:text-xl leading-relaxed font-bold xl:py-4'>{cardsData[index].thought}​</motion.p>
                        <motion.p
                            initial={{ x: 120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='text-[#000080] font-montserrat text-sm lg:text-lg xl:text-xl leading-relaxed font-bold '>{cardsData[index].motive}</motion.p>
                    </div>
                    <motion.div
                        initial={{ x: 120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="flex justify-end gap-4 absolute bottom-0 right-30 ">
                        <button onClick={prev} disabled={index === 0} className="w-8 h-8 lg:w-12 lg:h-12 border-4 border-[#000080] rounded-full flex items-center justify-center text-[#000080] text-sm lg:text-xl cursor-pointer relative hover:-top-1">
                            ←
                        </button>

                        <button onClick={next}
                            disabled={index >= cardsData.length - 1} className="w-8 h-8 lg:w-12 lg:h-12 border-4 border-[#000080] rounded-full flex items-center justify-center text-[#000080] text-sm lg:text-xl cursor-pointer relative hover:-top-1">
                            →
                        </button>
                    </motion.div>


                </div>
            </section>

            <motion.section
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className='w-[90%] xl:w-[80%] 2xl:w-[70%] py-10 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  '>
                {
                    facultyDetails.map((user) => (
                        <Faculty key={user.id} user={user} />
                    ))
                }

            </motion.section>
        </>
    )
}

export default Team