'use client'
import { motion } from 'framer-motion';
import Image from 'next/image'
import { useState } from 'react';


export type Course = {
    id: number;
    image: string;
    course: string;
    description1: string;
    description2: string;
    ourServices?: {
        description: string;
        services: Array<{
            id: number;
            image: string;
            desc: string;
        }>;
    };
    courses: {
        title: string;
        desc: string;
        provided: Array<{
            id: number;
            image: string;
            title: string;
            desc: string;
        }>;
    };
};

const Details = ({ data }: { data: Course }) => {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < data.courses.provided.length - 2) {
            setIndex(index + 1);
        }
    };
    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };
    return (
        <div className=' flex flex-col justify-center gap-10 px-10 lg:px-20 xl:px-30 py-30'>
            <section className='grid grid-cols-2'>
                <motion.div
                    initial={{ x: -120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='w-[70%] relative'>
                    <Image src={data?.image} alt={data.course} fill className='w-60 h-115 lg:w-80 lg:h-135 xl:w-130 xl:h-185 relative' />
                </motion.div>
                <motion.div
                    initial={{ x: 120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className=' flex flex-col gap-2  relative 2xl:pr-28 '>
                    <h1 className='text-[#001715] text-xl lg:text-2xl xl:text-4xl font-montserrat font-bold py-2 lg:py-4'>{data.course}</h1>
                    <p className='text-xs lg:text-[15px] xl:text-[20px] 2xl:text-[21px] font-montserrat text-[#616161]  xl:leading-8 leading-relaxed'>{data.description1}</p>
                    <p className='text-xs lg:text-[15px] xl:text-[20px] 2xl:text-[21px]  font-montserrat text-[#616161] xl:leading-8  pt-5 leading-relaxed'> {data.description2}</p>

                    <button className='text-[#000080] text-lg lg:text-2xl xl:text-3xl font-montserrat font-bold place-content-start flex 2xl:pt-10'>Book Now →</button>
                </motion.div>
            </section>
            <section className='mt-6  flex flex-col justify-center'>
                {
                    data?.ourServices && <>

                        <div>
                            <motion.h1
                                initial={{ y: 120, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: false, amount: 0.5 }}
                                className='text-[#001715] text-3xl xl:text-4xl font-montserrat font-bold text-center'>Our Services</motion.h1>
                            <motion.p
                                initial={{ y: 120, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: false, amount: 0.5 }}
                                className='text-[#616161] font-montserrat leading-relaxed  text-center text-sm xl:text-lg 2xl:text-xl px-20 2xl:px-25 lg:py-10 py-5'>{data.ourServices.description}</motion.p>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  mx-auto gap-2'>
                            {
                                data.ourServices.services.map((service) => (
                                    <motion.div
                                        initial={{ x: -120, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        key={service.id}
                                        className="group perspective-[1000px]" // Group stays here to trigger the flip
                                    >
                                        <div className="relative w-40 h-40 lg:w-52 lg:h-52 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 transition-all duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">

                                            {/* FRONT SIDE (Image) */}
                                            <div className="absolute inset-0 w-full h-full backface-hidden">
                                                <Image
                                                    src={service?.image}
                                                    alt="Fashion"
                                                    fill
                                                    className="rounded-[40px] object-cover"
                                                />
                                            </div>

                                            {/* BACK SIDE (Yellow Content) */}
                                            <div className="absolute inset-0 w-full h-full bg-[#F5CC00E6] flex flex-col justify-center items-center rounded-[40px] backface-hidden transform-[rotateY(180deg)]">
                                                <p className="text-[#000080] font-bold font-montserrat text-lg 2xl:text-3xl">
                                                    {String(service.id).padStart(2, '0')}
                                                </p>
                                                <h1 className="text-center text-[#1C1C1C] font-montserrat font-bold px-6 text-base lg:text-xl xl:text-2xl">
                                                    {service.desc}
                                                </h1>
                                            </div>

                                        </div>
                                    </motion.div>

                                ))
                            }
                        </div>
                    </>}
            </section>


            <section>
                {
                    data.courses && <>

                        <motion.h1
                            initial={{ y: 120, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='text-[#001715] text-2xl lg:text-4xl font-montserrat font-bold text-center'>{data.courses.title}</motion.h1>
                        <motion.p
                            initial={{ y: 120, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className='lg:py-10 py-5  text-[#000000] text-md lg:text-lg 2xl:text-xl font-montserrat text-center font-medium xl:px-10 leading-relaxed 2xl:px-25'>{data.courses.desc}</motion.p>

                        <div className='w-[90%] mx-auto flex flex-col gap-10 relative pb-18'>



                            <motion.div
                                initial={{ x: -120, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: false, amount: 0.5 }}
                                key={data.courses.provided[index].id} className='flex gap-5'>
                                <div className='w-180  '>
                                    <Image src={data.courses.provided[index].image} width={150} height={150} alt='Fashion' className='w-180 h-full ' />
                                </div>
                                <div className='bg-[#F2F2F2]  w-full rounded-4xl flex flex-col xl:px-20 lg:px-10 px-5'>
                                    <div className='py-5 xl:py-10 flex gap-5 items-center '>
                                        <span className='text-xl xl:text-2xl 2xl:text-4xl bg-[#2B2B2B] h-12 w-12 xl:h-15 xl:w-15 2xl:h-20 2xl:w-20 rounded-full p-3 xl:p-4 font-bold text-center text-[#FFFFFF]'>{String(data.courses.provided[index].id).padStart(2, '0')}</span>
                                        <h1 className='text-[#2D2D2D] text-sm lg:text-lg xl:text-xl 2xl:text-3xl font-montserrat font-bold'>{data.courses.provided[index].title}</h1>
                                    </div>

                                    <p className='text-[#616161] text-sm lg:text-sm 2xl:text-lg lg:leading-relaxed font-montserrat'>{data.courses.provided[index].desc}.</p>

                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ x: 120, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: false, amount: 0.5 }}
                                key={data.courses.provided[index + 1].id} className='flex gap-5'>
                                <div className='bg-[#F2F2F2]  w-full rounded-4xl flex flex-col xl:px-20 lg:px-10 px-5 py-2'>
                                    <div className='py-5 xl:py-10 flex gap-5 items-center '>
                                        <span className='text-xl xl:text-2xl 2xl:text-4xl bg-[#2B2B2B] h-12 w-12 xl:h-15 xl:w-15 2xl:h-20 2xl:w-20 rounded-full p-3 xl:p-4 font-bold text-center text-[#FFFFFF]'>{String(data.courses.provided[index + 1].id).padStart(2, '0')}</span>
                                        <h1 className='text-[#2D2D2D] text-sm lg:text-lg xl:text-xl 2xl:text-3xl font-montserrat font-bold'>{data.courses.provided[index + 1].title}</h1>
                                    </div>

                                    <p className='text-[#616161] text-sm lg:text-sm 2xl:text-lg lg:leading-relaxed font-montserrat'>{data.courses.provided[index + 1].desc}</p>
                                </div>
                                <div className='w-180  '>
                                    <Image src={data.courses.provided[index + 1].image} width={150} height={150} alt='Fashion' className='w-180 h-full' />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ x: 120, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: false, amount: 0.5 }}
                                className="flex justify-end gap-4 absolute bottom-0 right-30 ">
                                <button onClick={prev} className="w-8 h-8 lg:w-12 lg:h-12 border-4 border-[#000080] rounded-full flex items-center justify-center text-[#000080] text-sm lg:text-xl cursor-pointer relative hover:-top-1">
                                    ←
                                </button>

                                <button onClick={next}
                                    className="w-8 h-8 lg:w-12 lg:h-12 border-4 border-[#000080] rounded-full flex items-center justify-center text-[#000080] text-sm lg:text-xl cursor-pointer relative hover:-top-1">
                                    →
                                </button>
                            </motion.div>
                        </div>
                    </>
                }

            </section>

            <motion.section
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className='flex justify-center  place-content-center'>
                <button className='text-[#000080] px-4 py-2 border-2 border-black rounded-xl font-bold font-montserrat text-2xl cursor-pointer hover:scale-105'>Get In Touch</button>
            </motion.section>
        </div>
    )
}

export default Details