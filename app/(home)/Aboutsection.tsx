'use client'
import Image from 'next/image'
import { motion } from "framer-motion";
import Studentabout from '@/public/student-about.png'
import World from '@/public/world.png'
import Brain from '@/public/brain.png'
import Rocket from '@/public/rocket.png'

const Aboutsection = () => {
    return (
        <section className="relative  h-full overflow-hidden md:pb-15 lg:pb-30 xl:pb-10 2xl:pb-15">
            <div className="grid grid-cols-2 mx-20 gap-20 ">

                {/* LEFT SIDE – IMAGE + SHAPES */}
                <div className=" relative ">
                    <motion.div
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >

                        <Image
                            src={Studentabout}
                            alt="Creative Academy"
                            className=""
                        />
                    </motion.div>

                    {/* Vision & Mission cards */}
                    <motion.div
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="mt-10 lg:mt-40 flex gap-6 flex-col lg:flex-row">
                        <div className="card-moveup bg-white shadow-md rounded-xl drop-shadow-b-lg p-5 w-75 mb-2">
                            <div className="flex flex-row items-center mb-2 gap-3">
                                <Image src={World} alt="Vision Icon" className='w-5 h-5 xl:w-15 xl:h-15' />
                                <p className="font-montserrat text-sm xl:text-[20px] text-[#000000] font-bold mb-0">
                                    Our Vision
                                </p>
                            </div>
                            <p className="text-xs xl:text-[16px] text-[#797C8B]">
                                To become the most trusted design institute where dreams in Fashion, Interiors, and Graphics are transformed into impactful realities.
                            </p>
                        </div>

                        <div className="card-moveup bg-white shadow-md rounded-xl drop-shadow-b-lg p-5 w-75 mb-2">
                            <div className=" flex flex-row items-center mb-2 gap-3">
                                <Image src={Brain} alt="Vision Icon" className='w-5 h-5 xl:w-15 xl:h-15' />
                                <p className="font-montserrat text-sm xl:text-[20px] text-[#000000] font-bold mb-0">
                                    Our Mission
                                </p>
                            </div>
                            <p className="text-xs xl:text-[16px] text-[#797C8B]">
                                Our mission is to provide best training in Fashion, Interior, and Graphic design through expert guidance, hands-on learning, and strong industry exposure, enabling students to thrive in creative careers.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE – CONTENT */}
                <div className="font-montserrat mt-5 lg:mt-20 xl:mt-30">
                    <motion.p
                        initial={{ x: 120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className=" text-[#E13C5B] font-montserrat text-lg lg:text-xl xl:text-2xl mb-2 lg:mb-5 xl:mb-8">
                        About Us Creative Academy
                    </motion.p>

                    <motion.h2
                        initial={{ x: 120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className=" text-lglg:text-2xl xl:text-4xl  text-[#000080] font-montserrat font-bold mb-2 xl:mb-4">
                        A Place to Thrive
                    </motion.h2>

                    <motion.p
                        initial={{ x: 120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-[#5F5F5F] text-sm lg:text-lg xl:text-xl font-montserrat leading-relaxed mb-8">
                        We don’t just teach theory — we immerse students in hands-on,
                        practical learning experiences. With state-of-the-art
                        infrastructure, industry-expert faculty, and strong connections
                        to Bangalore’s creative sector, we prepare students not just
                        for jobs, but for thriving creative careers.
                    </motion.p>

                    <motion.h3
                        initial={{ x: 120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-lg lg:text-2xl xl:text-3xl  text-[#000080] font-montserrat font-bold mb-4">
                        What Sets Us Apart?
                    </motion.h3>

                    <motion.p
                        initial={{ x: 120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-[#5F5F5F] text-sm lg:text-lg xl:text-xl font-montserrat leading-relaxed mb-8 text-justify">
                        Unlike traditional institutes, we believe in personalized
                        learning through small batch sizes (maximum 15 students),
                        ensuring every student receives individual attention and
                        expert mentorship. Our curriculum is constantly updated to
                        reflect current industry trends, tools, and practices.
                    </motion.p>

                </div>
            </div>
            <motion.div
                initial={{ x: 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className="absolute -right-10  bottom-0">
                <Image src={Rocket} alt="Creative Academy" className='relative w-60 h-40 xl:w-140 xl:h-60' />
            </motion.div>

        </section>
    )
}

export default Aboutsection