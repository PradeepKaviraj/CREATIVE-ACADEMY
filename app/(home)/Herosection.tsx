'use client'
import Image from 'next/image';
import { motion } from "framer-motion";
import background from '@/public/Hero-BG.svg'
import Playbuttonimg from '@/public/Playbuttonimg.png';
import student from '@/public/student-herosec.png';


const Herosection = () => {
    return (
        <main className="bg-[#F5FAFF] overflow-hidden flex px-10 lg:px-20 xl:px-30 pt-15 h-110 lg:h-screen  justify-center">
            
            <motion.section
                initial={{ x: -120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
                className=" w-[50%] ">
                <div className='relative 2xl:pt-20'>
                    <h1 className="lg:text-xl xl:text-[25px] leading-loose font-bold  align-justify ">
                        <span>Transform your creative passion into</span>
                        <span> professional excellence with industry-focused </span>
                        <span>diploma courses in </span>
                        <span
                            className='bg-red-500 text-white'> Fashion Design, Interior  Design, Graphics Design, and Video Editing.</span>
                        <span> Located in the heart of Banashankari, Bangalore.</span>
                    </h1>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex flex-row mt-10">
                    <div className={` flex flex-col items-center `}>
                        <h1 className="text-xl xl:text-3xl ml-2 xl:ml-5 font-bold font-montserrat text-[#E13C5B] leading-[1.6]">
                            500+
                        </h1>
                        <p className="text-[#797C8B] text-xs xl:text-sm font-bold font-montserrat text-center">
                            Students Trained
                        </p>
                    </div>
                    <div className={` flex flex-col items-center w-45`}>
                        <h1 className="text-xl xl:text-3xl ml-5 font-bold font-montserrat text-[#E13C5B] leading-[1.6]">
                            10+
                        </h1>
                        <p className="text-[#797C8B] text-xs xl:text-sm font-bold font-montserrat">
                            Industry Mentors
                        </p>
                    </div>
                    <div className={`flex flex-col items-center w-45`}>
                        <h1 className="text-xl xl:text-3xl ml-5 font-bold font-montserrat text-[#E13C5B] leading-[1.6]">
                            8
                        </h1>
                        <p className="text-[#797C8B] ml-4 text-xs xl:text-sm pt-1 font-bold font-montserrat text-center">
                            University Affiliated Courses
                        </p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ x: -120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex flex-row items-center mt-10  gap-10">
                    <button className="bg-[#000080] text-sm lg:text-lg rounded-[10px] flex items-center justify-center py-2 px-4 text-[#FFFFFF] font-bold font-montserrat cursor-pointer hover:scale-105 transition-transform duration-75 ease-in-out">
                        <span className='opacity-90'>Learn More</span>
                    </button>

                    <button className="hover:scale-105 cursor-pointer  ml-5 flex flex-row items-center ">
                        <Image
                            src={Playbuttonimg}
                            alt="Play Button"
                            width={100}
                            height={50}
                            priority={true}
                            className="w-10 h-10 "
                        />
                        <span className="text-sm lg:text-[20px] ml-5  font-montserrat font-bold">
                            Show More
                        </span>
                    </button>
                </motion.div>
            </motion.section>


            <section className=" w-[50%] relative  ">
                <motion.div
                    className=' absolute -left-20 -top-50 xl:-top-30 xl:right-0 '
                    animate={{
                        y: ['50%', '-50%'],
                        opacity: [1, 0]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: 'linear'
                    }}>
                    <Image src={background} alt='Background Image' priority={true} className='relative w-180 h-180 xl:w-200 xl:h-200  z-10'></Image>
                </motion.div>
                <div className='absolute top-10 2xl:left-10'>
                    <Image src={student} alt='Student-Image' priority={true} className=' relative z-20 w-120  h:120 xl:w-150 xl:h-150'></Image>
                </div>
            </section>
        </main>
    )
}

export default Herosection