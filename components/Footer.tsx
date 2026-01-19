'use client'
import React from 'react'
import { motion } from 'framer-motion';


const Footer = () => {

  return (
    <footer className="font-montserrat pt-5 lg:pt-0 overflow-hidden">

      {/* ================= CTA BLUE BOX ================= */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        className="mx-auto relative w-2xl lg:w-4xl xl:max-w-5xl py-15 lg:py-25">
        <div className="bg-[#000080] rounded-[80px] px-20 py-10 text-center text-white overflow-hidden ">

          {/* Decorative circles (optional, can remove later) */}
          <div className="absolute top-12 left-10 w-20 h-20 bg-[#E13C5B] rounded-full " />
          <div className="absolute bottom-12 right-10 w-20 h-20 bg-yellow-400 rounded-full" />

          <h3 className="text-xl lg:text-3xl  font-montserrat font-bold mb-4 text-yellow-400">
            Ready to Transform Your Creative Journey?
          </h3>

          <p className="text-xs lg:text-sm  font-montserrat font-medium mb-6 opacity-90">
            Join hundreds of successful graduates who&#39;ve turned their passion into profession.
          </p>

          <p className="text-xl lg:text-3xl font-montserrat font-bold mb-5  text-yellow-400">
            Enroll Today!
          </p>

          {/* CTA ICONS */}
          <div className="flex justify-center gap-6">
            <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center text-[#000080]">
              📞
            </div>
            <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center text-[#000080]">
              👥
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= NEWSLETTER ================= */}
      <div className="border-t border-b py-10  flex items-center justify-evenly">
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}>
          <h4 className="text-2xl  xl:text-[36px]  font-bold mb-1 text-shadow-lg ">Stay Information</h4>
          <p className="text-[16px] font-montserrat text-gray-500 text-shadow-lg">
            Sign up for our newsletter
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex items-center  border-[3px] border-[#000080] rounded-lg overflow-hidden w-md">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="flex-1 px-4 py-3 outline-none"
          />
          <button className="bg-[#000080] flex items-center justify-center mr-2 rounded-sm h-10 cursor-pointer text-white px-6 py-3">
            Subscribe
          </button>
        </motion.div>
      </div>

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        className="max-w-7xl mx-auto grid grid-cols-4  xl:gap-10 text-sm py-20 justify-evenly">

        {/* INFORMATION */}
        <div className='px-5 xl:px-10'>
          <h5 className="font-bold text-sm lg:text-lg xl:text-[18px] mb-4 text-shadow-lg">Information</h5>
          <ul className="space-y-2 text-xs lg:text-sm xl:text-[15.5px] text-[#4D4D4D] text-shadow-lg">
            <li>Fashion Design</li>
            <li>Interior Design</li>
            <li>Graphic & Video Editing</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className='w-60 lg:w-80 xl:w-100'>
          <h5 className="font-bold text-sm lg:text-[18px] mb-4 text-shadow-lg">Contact</h5>
          <ul className="space-y-2 text-xs lg:text-sm xl:text-[15.5px] text-[#4D4D4D] text-shadow-lg">
            <li>Phone : +90355 13377 / 90351 80580</li>
            <li>Email : thecreativeacademyblr@gmail.com</li>
            <li>
              Address : #116, Diamond Enclave, 3rd Phase, Outer Ring Rd,
              5th Block, Katriguppe, Banashankari 3rd Stage,
              Bengaluru 560085
            </li>
          </ul>
        </div>

        {/* MENU */}
        <div className='px-25 lg:px-20 xl:px-25'>
          <h5 className="font-bold text-sm lg:text-[18px] mb-4 text-shadow-lg">Menu</h5>
          <ul className="space-y-2 text-xs lg:text-[15.5px] text-[#4D4D4D] text-shadow-lg">
            <li>About</li>
            <li>Courses</li>
            <li>Students Corners</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div className=''>
          <h5 className="font-bold text-sm lg:text-[18px] mb-4 text-shadow-lg">The Creative Academy</h5>
          <p className="text-xs lg:text-[15.5px] text-[#4D4D4D] mb-4 text-shadow-lg">
            Join us today and turn your creative passion into a thriving career.
            Your story could be the next success we celebrate.
          </p>

          <div className="flex gap-4">
            <div className="w-9 h-9 bg-[#000080] text-white rounded-full flex items-center justify-center">
              f
            </div>
            <div className="w-9 h-9 bg-[#E13C5B] text-white rounded-full flex items-center justify-center">
              📸
            </div>
          </div>
        </div>
      </motion.div>



      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-[#000080] text-white px-20 py-4 flex justify-between text-sm">
        <p>© The Creative Academy 2025. All rights reserved.</p>
        <p>Contact Us : +12 345 678 921</p>
      </div>



    </footer>
  )
}

export default Footer