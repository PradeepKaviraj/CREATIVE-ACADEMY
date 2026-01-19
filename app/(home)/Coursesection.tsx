'use client'
import Image from "next/image";
import fashion from '@/public/fashiondesign.png'
import interior from '@/public/interiordesign.png'
import graphicvideo from '@/public/graphicvideoediting.png'
import showarc from '@/public/showarc.png'
import batchlearningicon from '@/public/batchlearn.png'
import industrycertificateicon from '@/public/industrycertification.png'
import expertfacultyicon from '@/public/faculty.png'
import portfolioicon from '@/public/portfolioicon.png'
import leftrocket from '@/public/leftrocket.png'
import { motion } from 'framer-motion';


const Coursesection = () => {
    return (
        <section className="mx-20 py-10 h-full font-montserrat">

            {/* HEADING */}
            <div className="text-center mb-10 xl:mb-20">
                <motion.p
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-[#E13C5B] font-montserrat text-[24px] mb-4">Our Courses</motion.p>
                <motion.h2
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-lg lg:text-2xl xl:text-4xl font-bold font-montserrat text-[#000000] max-w-5xl mx-auto">
                    We offer engaging, interactive art courses students love.
                    Scroll below to enroll today.
                </motion.h2>
            </div>

            {/* COURSES GRID */}
            <motion.div
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex lg:mx-auto h-full max-w-max gap-5  mb-32">

                {/* CARD 1 */}
                <div className="bg-[#FFFDF2] rounded-2xl relative hover:-top-10 cursor-pointer">

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
                    <h3 className="text-lg lg:text-2xl xl:text-[28px] font-montserrat p-6 font-bold mb-2">
                        Fashion Design
                    </h3>

                    {/* LIST */}
                    <ul className="text-[#5F5F5F] font-montserrat font-medium  space-y-4 p-6 text-sm xl:text-[20px]">
                        <li>Advanced Diploma in Fashion Design</li>
                        <li>Diploma in Fashion Design</li>
                        <li>Fashion Design & Boutique Management</li>
                        <li>Fashion Styling & Image Consulting</li>
                        <li>Fashion Software Program</li>
                        <li>Certificate Courses</li>
                    </ul>

                </div>


                {/* CARD 2 */}
                <div className="bg-[#F2FEFF] rounded-2xl relative hover:-top-10 cursor-pointer">

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
                    <h3 className="text-lg lg:text-2xl xl:text-[28px] font-montserrat p-6 font-bold mb-2">
                        Interior Design
                    </h3>

                    {/* LIST */}
                    <ul className="text-[#5F5F5F] font-montserrat font-medium  space-y-4 p-6 text-sm xl:text-[20px]">
                        <li>Advanced Diploma in Interior Design</li>
                        <li>Diploma in Interior Design</li>
                        <li>Interior Styling</li>
                        <li>Kitchen Designing</li>
                        <li>Interior Software Program</li>
                        <li>Google Sketchup with Vray</li>
                        <li>3ds Max with Vray</li>
                        <li>Certificate Courses</li>
                        <li>AI In Interior Design</li>
                    </ul>

                </div>

                {/* CARD 3 */}
                <div className="bg-[#F2FEFF] rounded-2xl relative hover:-top-10 cursor-pointer">

                    <div className="absolute top-2 right-2">
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
                    <h3 className="text-lg lg:text-2xl xl:text-[28px] font-montserrat font-bold px-6 pt-6">
                        Graphic Design & Video Editing
                    </h3>

                    {/* LIST */}
                    <ul className="text-[#5F5F5F] font-montserrat font-medium  space-y-4 p-6 text-sm xl:text-[20px]">
                        <li>Advanced Diploma in Graphic Design &</li>
                        <li>Video Editing</li>
                        <li>Diploma in Graphic Design</li>
                        <li>Diploma in Video Editing</li>
                        <li>Certificate Courses</li>
                        <li>AI in Graphic Design & Video Editing</li>
                    </ul>

                </div>
            </motion.div>

            {/* WHY CHOOSE US */}
            <div className="grid grid-cols-2  items-start">

                {/* LEFT CONTENT */}
                <div>
                    <motion.h2
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-3xl xl:text-[50px] font-montserrat font-bold mb-5 xl:mb-10">
                        Why Choose <span className="text-[#000080]">THE CREATIVE ACADEMY?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ x: -120, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-[#585858] font-montserrat text-sm mb-10 max-w-lg">
                        We don&#39;t just teach — we transform creative minds into
                        industry-ready professionals.
                    </motion.p>

                    {/* IMAGE PLACEHOLDER (PAPER ROCKET) */}
                    <div className="absolute -left-15">
                        <Image
                            src={leftrocket}
                            alt="Fashion Design"
                            className="w-100 h-80 lg:w-100 lg:h-90 "
                        />
                    </div>
                </div>

                {/* RIGHT FEATURES */}
                <motion.div
                    initial={{ x: 120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="grid lg:grid-cols-2 gap-6 xl:gap-20">

                    <div className="card-moveup bg-[#FFE2E7] h-58 p-3 xl:p-6 rounded-xl">
                        <div className="flex flex-row items-center gap-4 mb-8 mt-4">
                            <Image
                                src={batchlearningicon}
                                alt="Fashion Design"
                                className="w-8 h-8"
                            />
                            <h4 className="text-sm xl:text-lg font-bold font-montserrat">Small Batch Learning</h4>
                        </div>
                        <p className="text-xs xl:text-sm text-[#636363]">
                            Maximum 15 students per batch ensuring personalized attention, one-on-one mentoring, and accelerated skill development.
                        </p>
                    </div>

                    <div className="card-moveup bg-[#FFF8E6] p-6 rounded-xl">
                        <div className="flex flex-row items-center gap-4 mb-5">
                            <Image
                                src={industrycertificateicon}
                                alt="Fashion Design"
                                className=" w-8 h-8"
                            />
                            <h4 className="text-sm xl:text-lg font-bold font-montserrat">Industry-recognized Certification</h4>
                        </div>
                        <p className="text-xs xl:text-sm text-[#636363]">
                            Courses designed with current industry needs, latest software training, and real-world project experience with recognized University affiliated courses.
                        </p>
                    </div>

                    <div className="card-moveup bg-[#FFF9DA] p-6 rounded-xl">
                        <div className="flex flex-row items-center gap-4 mb-5 mt-4">
                            <Image
                                src={expertfacultyicon}
                                alt="Fashion Design"
                                className="w-8 h-8"
                            />
                            <h4 className="text-sm xl:text-lg font-bold font-montserrat">Expert Faculty</h4>
                        </div>
                        <p className="text-xs xl:text-sm text-[#636363]">
                            Learn from professionals with 10+ years of industry experience in fashion, interior design, graphics, and video production.
                        </p>
                    </div>

                    <div className="card-moveup bg-[#FFE2E7] p-6 rounded-xl ">
                        <div className="flex flex-row items-center gap-4 mb-5">
                            <Image
                                src={portfolioicon}
                                alt="Fashion Design"
                                className=" w-8 h-8"
                            />
                            <h4 className="text-sm xl:text-lg font-bold font-montserrat">Portfolio Development & Placement Support​</h4>
                        </div>
                        <p className="text-xs xl:text-sm text-[#636363]">
                            Graduate with a professional portfolio showcasing real projects that impress employers and clients. We have 95% placement rate with partnerships across Bangalore &apos s creative agencies, studios, and design firms.
                        </p>
                    </div>
                </motion.div>
            </div>

        </section>
    )
}

export default Coursesection