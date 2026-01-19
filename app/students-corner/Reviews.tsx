'use client'
import { motion } from 'framer-motion';
import Image from 'next/image'
import Quote from '@/public/quote-right.png'


const Reviews = () => {
    const studentReview = [
        {
            id: 1,
            name: 'Maheshwari Aravind',
            course: 'Fashion Design Student',
            review: "The Creative Academy was the right place to persue my passion. The team is truly empowering and considerate to help all students transform from novice to pro's. We were taught by skilled professionals who guided us in class and also in all our projects. My experience at Dreamzone Banashankari has been truly enriching. The course structure is well defined and integrated, The faculty here are highly co-operative and friendly. It has been fun and life changing experience to study here.",
        },
        {
            id: 2,
            name: 'Kavya R',
            course: 'Graphic & Web Design Student',
            review: "I am glad that I got a chance to express my experience with this Institute and the faculty. I have really observed good transformation in myself after joining here. The faculty is very supportive and they provide individual attention. They are very professional and talented. They motivate us to pursue towards our goals and they give techniques to learn and remember tools. I really feel confident and creative of being a graphic and web designer. The study materials provided are very descriptive and sufficient. I Certainly I am very delighted and thankful to the Creative Academy.",
        },
        {
            id: 3,
            name: 'Chithra S',
            course: 'Fashion Design Student',
            review: "Grateful to be a part of The Creative Academy. I want to thank each and everyone for helping me to follow my passion and my dreams and make it a reality.",
        },
        {
            id: 4,
            name: 'Savan Ramani',
            course: 'Animation Student',
            review: "It's really a good institute for learning animation courses. The trainers are really very friendly and have a perfect knowledge of the full subject which really helps everyone to know about the subject in deep. Thank you.",
        },
    ]

    const itemsPerPage = 4;
    const currentPage = 1;
    const offset = (currentPage - 1) * itemsPerPage;
    return (
        <motion.div 
        initial={{ x: -120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
        className='flex gap-5 mx-auto max-w-[90%] flex-wrap justify-center py-8 relative pb-20'>

            {
                studentReview.map((students) => (
                    <div key={students.id} className='w-[45%] h-90 bg-[#FFFDF2] px-5 py-10 relative'>
                        <div className='absolute right-10 top-10'>
                            <Image src={Quote} alt='Quote' className='w-15 h-12' />
                        </div>
                        <h1 className='text-[#000080] text-xl font-montserrat font-bold'>{students.name}</h1>
                        <p className='text-[#1A1A1A] text-sm font-montserrat font-medium py-2'>{students.course}</p>
                        <p className='text-[#1A1A1A] text-sm font-montserrat py-5 leading-relaxed'>{students.review}</p>
                    </div>
                ))
            }
            <motion.div
                initial={{ x: 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex justify-end gap-4 absolute bottom-0 right-30 ">
                <button   className="w-8 h-8 lg:w-12 lg:h-12 border-4 border-[#000080] rounded-full flex items-center justify-center text-[#000080] text-sm lg:text-xl cursor-pointer relative hover:-top-1">
                    ←
                </button>

                <button 
                     className="w-8 h-8 lg:w-12 lg:h-12 border-4 border-[#000080] rounded-full flex items-center justify-center text-[#000080] text-sm lg:text-xl cursor-pointer relative hover:-top-1">
                    →
                </button>
            </motion.div>
        </motion.div>
    )
}

export default Reviews