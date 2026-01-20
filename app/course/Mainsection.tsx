'use client'
import Image from "next/image";
import fashion from '@/public/fashiondesign.png'
import interior from '@/public/interiordesign.png'
import graphicvideo from '@/public/graphicvideoediting.png'
import showarc from '@/public/showarc.png'
import { motion } from 'framer-motion';
import Link from "next/link";

const Mainsection = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex mx-auto h-full max-w-2xl lg:max-w-4xl xl:max-w-7xl gap-5  mb-32 mt-20 lg:mt-25">

            {/* CARD 1 */}
            <div className=" rounded-2xl relative hover:-top-5 cursor-pointer">

                <Link href={'/1'}>
                    <div className="absolute top-2 right-2">
                        <Image src={showarc} alt="share" className="w-10 h-10" />
                    </div>

                    {/* IMAGE */}
                    <div className="mb-2  rounded-xl">
                        <Image
                            src={fashion}
                            alt="Fashion Design"
                            className="w-150 h-60 lg:w-120 lg:h-80 xl:h-100 "
                        />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg lg:text-2xl xl:text-[28px] font-montserrat p-6 font-bold mb-2 text-center">
                        Fashion Design
                    </h3>

                </Link>
            </div>


            {/* CARD 2 */}
            <div className=" rounded-2xl relative hover:-top-5 cursor-pointer">
                <Link href={'/2'}>
                    <div className="absolute top-2 right-2">
                        <Image src={showarc} alt="share" className="w-10 h-10" />
                    </div>

                    {/* IMAGE */}
                    <div className="mb-2 rounded-2xl">
                        <Image
                            src={interior}
                            alt="Fashion Design"
                            className="w-150 h-60 lg:w-120 lg:h-80 xl:h-100 "
                        />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg lg:text-2xl xl:text-[28px] font-montserrat p-6 font-bold mb-2 text-center">
                        Interior Design
                    </h3>
                </Link>
            </div>

            {/* CARD 3 */}
            <div className=" rounded-2xl relative hover:-top-5 cursor-pointer">
                <Link href={'/2'}>
                    <div className="absolute top-2 right-4">
                        <Image src={showarc} alt="share" className="w-10 h-10" />
                    </div>

                    {/* IMAGE */}
                    <div className="mb-2  rounded-xl">
                        <Image
                            src={graphicvideo}
                            alt="Fashion Design"
                            className="w-150 h-60 lg:w-120 lg:h-80 xl:h-100"
                        />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg lg:text-xl xl:text-[28px] font-montserrat font-bold text-center  pt-6">
                        Graphic Design & Video Editing
                    </h3>
                </Link>
            </div>
        </motion.div>
    )
}

export default Mainsection