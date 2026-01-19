"use client"
import GridBG from '@/public/Gridbg.svg'
import Image from 'next/image';
import Girl from '@/public/Girl-herosec.png'
import Blud from '@/public/Blud.svg'
import Circle from '@/public/Cricle.svg'
import Diamond from '@/public/Daimond.svg'
import Heart from '@/public/Heart.svg'
import { motion } from 'framer-motion';

const Herosection = () => {
    return (
        <main className="overflow-hidden  h-120 relative  lg:h-screen flex justify-center ">
            <Image src={GridBG} alt='Grid-Background-Image' fill={true} priority={true} className='object-cover' />

            {/* Right-Section */}
            <section className='w-1/2 h-full font-montserrat flex flex-col justify-center gap-10 px-10 lg:px-20 xl:px-30'>

                <motion.h1
                    initial={{ x: -120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='font-bold text-[#001715] text-xl lg:text-3xl xl:text-5xl'>Who We Are</motion.h1>

                <div>
                    <motion.p
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-[#565656] text-sm lg:text-lg xl:text-2xl pb-4 '>&#34;Education is not the learning of facts, but training the mind to think&#34;</motion.p>
                    <motion.p
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-[#000080] font-bold text-md lg:text-xl xl:text-3xl'>- Albert Einstein</motion.p>
                </div>

                <div>
                    <motion.p
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-sm lg:text-lg xl:text-2xl text-[#565656] pb-4'>&#34;Provide training to think out of the box, to be confident & to flourish&#34;</motion.p>
                    <motion.p
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-[#000080] font-bold text-sm lg:text-xl xl:text-3xl'>- The Creative Academy​</motion.p>
                </div>

            </section>

            {/* Left-Section */}
            <motion.section
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className='w-1/2 relative'>
                <div className='absolute top-5 left-44  lg:left-58 '>
                    <Image src={Blud} alt='Blud' priority={true} className='w-15 h-15 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div
                    className='absolute top-30 right-15  lg:right-25 xl:right-60  2xl:right-0 2xl:left-120 '>
                    <Image src={Circle} alt='Circle' priority={true} className='w-6 h-6 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div className='absolute top-20 right-32 lg:right-36 xl:right-80 2xl:right-0 2xl:left-96 '>
                    <Image src={Diamond} alt='Diamond' priority={true} className='w-6 h-6 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div className='absolute top-34 right-30  lg:right-40 xl:left-92'>
                    <Image src={Heart} alt='Heart' priority={true} className='w-12 h-12 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                {/* Girl-Image */}
                <div className='absolute bottom-0 lg:bottom-10 xl:bottom-0 2xl:bottom-50'>
                    <Image src={Girl} alt='Girl-Image' priority={true} className='w-80 h-90 lg:w-105 lg:h-115 xl:w-140 xl:h-135 relative ' />
                </div>
            </motion.section>
        </main>
    )
}

export default Herosection