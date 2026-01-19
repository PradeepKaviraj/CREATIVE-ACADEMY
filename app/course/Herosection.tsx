'use client'
import GridBg from '@/public/Gridbg.svg'
import Image from 'next/image'
import { motion } from 'framer-motion';


import Boy from '@/public/Boy-herosec.png'
import Circle from '@/public/Cricle.svg'
import Diamond from '@/public/Daimond.svg'
import Heart from '@/public/Heart-yellow.svg'
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
                        className='font-bold text-[#001715] text-xl lg:text-3xl xl:text-5xl'>Our Courses</motion.h1>

                    <motion.p
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-[#565656] font-medium opacity-80 text-md lg:text-xl xl:text-2xl 2xl:text-4xl leading-relaxed pb-20'>Learn new skills today and begin transforming your creative journey with expert guidance, practical training and opportunities that elevate your professional growth.</motion.p>

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
                <div className='absolute top-34 right-30  lg:right-40 xl:left-92 '>
                    <Image src={Space} alt='Space-ship' priority={true} className='w-15 h-15 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div
                    className='absolute top-50 right-15  lg:right-25 xl:right-60  2xl:right-0 2xl:left-120 '>
                    <Image src={Circle} alt='Circle' priority={true} className='w-6 h-6 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div className='absolute top-20 right-32 lg:right-36 xl:right-40 2xl:right-0 2xl:left-96 '>
                    <Image src={Diamond} alt='Diamond' priority={true} className='w-6 h-6 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div className='absolute top-34 left-5 lg:left-10 xl:top-34 xl:left-15'>
                    <Image src={Heart} alt='Heart' priority={true} className='w-18 h-18 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div className='absolute top-12 right-50  lg:right-60 xl:left-80'>
                    <Image src={Redcircle} alt='circle' priority={true} className='w-6 h-6 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                <div className='absolute top-58 lg:top-60 right-30  lg:right-40 xl:right-80 2xl:left-90'>
                    <Image src={Redcircle} alt='circle' priority={true} className='w-4 h-4 animate-pulse [animation-duration:3s] [animation-delay:500ms] ease-in-out' />
                </div>

                {/* Boy-Image */}
                <div className='absolute bottom-0 lg:bottom-10 xl:bottom-20 2xl:bottom-50'>
                    <Image src={Boy} alt='Boy-Image' priority={true} className='w-80 h-90 lg:w-105 lg:h-115 xl:w-140 xl:h-135 relative ' />
                </div>
            </motion.section>
        </main>
    )
}

export default Herosection