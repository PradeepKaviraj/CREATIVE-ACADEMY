'use client'
import GridBg from '@/public/Gridbg.svg'
import Image from 'next/image'
import { motion } from 'framer-motion';


import Girl from '@/public/Girl-student.png'
import Circle from '@/public/Cricle.svg'
import Diamond from '@/public/Daimond.svg'
import Pencil from '@/public/Pencil-Rocket.png'
import Space from '@/public/Spaceship.svg'
import Redcircle from '@/public/Red-cricle.png'
import Leftrocket from '@/public/Left-Rocket.png'

const Herosection = () => {
    return (
        <main className="overflow-hidden  h-120 relative  lg:h-screen  flex ">
            <Image src={GridBg} alt='Grid-Background-Image' fill={true} priority={true} className='object-cover' />

            {/* Right-Section */}
            <section className='w-1/2 h-full font-montserrat flex flex-col justify-center gap-10 px-10 lg:px-20 xl:px-30'>
                <div className='flex flex-col gap-10'>

                    <motion.h1
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='font-bold text-[#001715] text-xl lg:text-3xl xl:text-5xl'>Students Corner</motion.h1>

                    <motion.p
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-[#565656] font-medium opacity-80 text-md lg:text-xl 2xl:text-4xl  leading-relaxed pb-20'>Our students speak for us; explore the inspiring culture, strong values, and creative spirit that define The Creative Academy experience.</motion.p>

                </div>
                <div className='absolute bottom-10 lg:bottom-10 xl:bottom-5 2xl:bottom-25 left-0'>
                    <motion.div
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='relative w-40 h-20 lg:w-60 lg:h-30 xl:w-80 xl:h-40 '>
                            <Image src={Leftrocket} alt='Rocket-Image' fill={true} priority={true} className='' />
                    </motion.div>

                </div>

            </section>

            {/* Left-Section */}
            <motion.section
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className='w-1/2 relative'>

                <div
                    className='absolute top-50 right-15  lg:right-25 lg:top-70 xl:right-50  2xl:left-130 2xl:top-80 '>
                    <Image src={Circle} alt='Circle' priority={true} className='w-8 h-8 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div className='absolute top-40 right-32 lg:right-36 xl:right-70 lg:top-60 2xl:left-125 2xl:top-60  '>
                    <Image src={Diamond} alt='Diamond' priority={true} className='w-6 h-6 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div className='absolute top-25 left-5 lg:left-10 xl:top-34 xl:left-15 2xl:left-40 2xl:top-30'>
                    <Image src={Pencil} alt='Pencil' priority={true} className='w-25 h-15 lg:w-35 lg:h-20 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div className='absolute top-25 right-50  lg:right-60 xl:left-80 lg:top-48 2xl:left-96 2xl:top-40 '>
                    <Image src={Redcircle} alt='circle' priority={true} className='w-6 h-6 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div className='absolute top-58 lg:top-85 right-30  lg:right-40 xl:top-90 xl:right-68 2xl:top-80 2xl:left-105'>
                    <Image src={Redcircle} alt='circle' priority={true} className='w-4 h-4 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
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